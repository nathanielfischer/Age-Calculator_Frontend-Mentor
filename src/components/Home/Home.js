import { useState } from "react";

import Card from "../UI/Card/Card";
import InputField from "../UI/InputField/InputField";
import Output from "../UI/Output/Output";
import Divider from "../UI/Output/Divider";

import styles from "./Home.module.css";

const Home = () => {
    const [date, setDate] = useState(null);

    const saveDateHandler = (dt) => {
        if(dt === null || isNaN(dt)){
            setDate(null);
        }else{
            setDate(dt.toString())
        }
    };

    return (
        <div className={styles.home}>
            <Card className="card-home">
                <InputField onSaveDate={saveDateHandler}/>
                <Divider/>
                <Output date={date}/>
            </Card>
        </div>
    );
}


export default Home;