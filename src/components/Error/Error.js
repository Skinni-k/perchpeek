import React from "react";
import { Link } from "react-router-dom";
import BrokenIcon from "./Icon";
import styles from "./error.module.css"

const Page404 = () => {
    //styles.page404
    return (
        <div className={styles.errorPage}>
            <BrokenIcon />
            <h1>Oops!</h1>
            <p className={styles.message}>It seems the page you are trying to access doesn't exist.</p>
            <Link to="/" className={styles.btn}>
                Go to Homepage
            </Link>
        </div>
    );
};

export default Page404;
