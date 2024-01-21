import React from "react";
import styles from "./ButtonToTop.module.scss";

function ButtonToTop({top}) {

    return (
        <a href={top} className={styles.to_top}>
            <span></span>
            <svg xmlns="http://www.w3.org/2000/svg" height="52" viewBox="0 0 32 32" width="52" ><g fill="none" fill-rule="evenodd"><path d="m0 0h32v32h-32z"/><path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm.0715729 7.25735931 7.0710678 7.07106779-1.4142136 1.4142136-4.6857864-4.6862814v10.4436407h-2v-10.4276407l-4.6710678 4.6702814-1.41421359-1.4142136 7.07106779-7.07106779.0222136.021z" fill="#ffffff" fill-rule="nonzero"/></g></svg>
        </a>
    );
}

export default ButtonToTop;