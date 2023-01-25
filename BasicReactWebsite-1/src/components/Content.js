import React from "react"

//style import
import styles from "./style-mainpage.module.css"

//image import
import reactLogo from "../images/react-logo.png"

export function Content(){
    return(
        <div className={styles['content-container']}>
        
            <div className={styles['grid-item-flex']}>
                <div className={styles.item}>
                    <h1>Fun facts about React</h1>
                </div>

                <div className={styles.item}>
                    <ul>
                        <li> <span>Was first released in 2013</span> </li>
                        <li> <span>Was origanlly created by Jordan Walke</span> </li>
                        <li> <span>Has well over 100K stars on Github</span> </li>
                        <li> <span>Is maintained by Facebook</span> </li>
                        <li> <span>Powers thousands of enterprise apps, including mobile apps</span> </li>
                    </ul>
                </div>
            </div>

            <div className={styles['grid-item-img']}>
                <img src={reactLogo} title="beautifully rotated image" alt="beautifully rotated image" />
            </div>
        </div>
    );
}