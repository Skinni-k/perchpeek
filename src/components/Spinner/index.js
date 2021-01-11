import React from "react";
import LoaderImg from "assets/loader.svg";
import styles from "./spinner.module.css";

const Spinner = ({ size }) => {
    return (
        <div className={styles.spinner}>
            <img src={LoaderImg} alt="loader-img" className={size ? styles.size : styles.md}/>
        </div>
    );
};

export default Spinner;
