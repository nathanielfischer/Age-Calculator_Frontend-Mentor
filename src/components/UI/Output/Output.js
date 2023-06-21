import styles from "./Output.module.css";

const Output = (props) => {
    const enteredDate = props.date;
    const todaysDate = new Date();

    //num = 0 === year
    //num = 1 === month
    //num = 2 === day
    const calculator = (dt, num) => {
        let ret = ["--", "--", "--"];
        if (enteredDate !== null) {
            dt = new Date(dt);

            const dateDiff = Math.floor(todaysDate.getTime() - dt.getTime());
            const day = 1000 * 60 * 60 * 24;

            let days = Math.floor(dateDiff / day);
            let years = Math.floor(days / 365.25);  // .25 for the leap years
            let remainingDays = Math.floor(days - (years*365.25));
            let months = Math.floor(remainingDays / 30.4375)    // 365.35 / 12 = 30.4375

            days = (remainingDays - (months*30));
            

            ret = [years, months, days];
        }
        return ret[num];
    };


    return (
        <div className={styles.text}>
            <a className={styles.purple}>{calculator(enteredDate, 0)}</a> 
            <a> years</a>
            <br></br>
            <a className={styles.purple}>{calculator(enteredDate, 1)}</a> 
            <a> months</a>
            <br></br>
            <a className={styles.purple}>{calculator(enteredDate, 2)}</a> 
            <a> days</a>
        </div>
    );
};

export default Output;