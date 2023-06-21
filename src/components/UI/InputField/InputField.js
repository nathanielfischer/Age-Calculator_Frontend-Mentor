import { useState } from "react";

import styles from "./InputField.module.css";

const InputField = (props) => {
    const [enteredDay, setEnteredDay] = useState(undefined);
    const [enteredMonth, setEnteredMonth] = useState(undefined);
    const [enteredYear, setEnteredYear] = useState(undefined);

    const dayChangeHandler = (event) => {
        let day = event.target.value;
        checkDay(day, enteredMonth);
    };

    const monthChangeHandler = (event) => {
        let month = event.target.value;
        if (month >= 1 && month <= 12) {
            console.log("trigger");
            //trigger checkDay
            if(checkDay(enteredDay, month) === false){
                setEnteredDay(null);
            }else{
                setEnteredDay(document.getElementById("day").value);
            }
        } else {
            month = null;
            setEnteredDay(document.getElementById("day").value);
        }
        checkDay(document.getElementById("day").value, month)
        saveDate(enteredYear, month, enteredDay);
        setEnteredMonth(month);
    };

    const yearChangeHandler = (event) => {
        let year = event.target.value;
        const today = new Date();
        if (year > today.getFullYear() || year < 1000) {
            year = null;
        }
        saveDate(year, enteredMonth, enteredDay);
        setEnteredYear(year);
    };


    /**
     * Check if the entered Day is correct for the entered Month
     * Return true if correct, false otherwise
     */
    const checkDay = (day, month) => {
        const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const check = day <= daysPerMonth[month - 1];

        if (day >= 1 && day <= 31) {
            if (month !== null && month !== undefined) {
                if (check === false) {
                    day = null;
                }
            }
        } else {
            day = null;
        }
        saveDate(enteredYear, month, day);
        setEnteredDay(day);
    };


    const saveDate =(year, month, day) => {
        let dt = new Date(year + "-" + month + "-" + day);
        //checks if any variable is null or undefined
        if(year == null || month == null || day == null){
            dt = null;
        }
        props.onSaveDate(dt);
    }


    return (
        <>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <label className={(enteredDay === null ? styles.error : "")}>DAY</label>
                    <input
                        type="text"
                        id="day"
                        placeholder="DD"
                        onChange={dayChangeHandler}
                        className={(enteredDay === null ? styles.errorInput : "")}
                    />
                    {/* {enteredDay === null && <p className={`${styles.error} ${styles.errorMessage}`}>Must be a valid day</p>} */}
                    <p className={`${styles.error} ${styles.errorMessage} ${enteredDay !== null && styles.hide}`}>Must be a valid day</p>
                </div>

                <div className={styles.input}>
                    <label className={(enteredMonth === null ? styles.error : "")}>MONTH</label>
                    <input
                        type="text"
                        placeholder="MM"
                        onChange={monthChangeHandler}
                        className={(enteredMonth === null ? styles.errorInput : "")}
                    />
                    <p className={`${styles.error} ${styles.errorMessage} ${enteredMonth !== null && styles.hide}`}>Must be a valid month</p>
                </div>
                <div className={styles.input}>
                    <label className={(enteredYear === null ? styles.error : "")}>YEAR</label>
                    <input
                        type="text"
                        placeholder="YYYY"
                        onChange={yearChangeHandler}
                        className={(enteredYear === null ? styles.errorInput : "")}
                    />
                    <p className={`${styles.error} ${styles.errorMessage} ${enteredYear !== null && styles.hide}`}>Must be a valid year</p>
                </div>
            </div>

            

        </>
    );
};

export default InputField;