import styles from "./Divider.module.css";

const Divider = () => {
    return (
        <div className={styles.divider}>
            <hr className={styles.hr}></hr>
            <button className={styles.btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 46 44"><g fill="none" stroke="#FFF"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
            </button>
            <hr className={`${styles.hr} ${styles.hr2}`}></hr>
        </div>
    );
};

export default Divider;