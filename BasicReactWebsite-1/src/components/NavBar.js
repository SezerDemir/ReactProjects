import React from "react"

//style import
import styles from "./style-mainpage.module.css"

//img import
import reactLogo from "../images/react-logo.png"

export function NavBar(){
    return(
        <nav className={styles['nav-container-flex']}>  
            <div className={styles.item}>
                <div className={styles['inner-flex-logo']}>
                    <img src={reactLogo} alt="react logo" />
                    <h1>ReactFacts</h1>
                </div>
            </div>
            <div className={styles.item}>
                <h1>React - Project 1</h1>
            </div>
        </nav>
    );
}