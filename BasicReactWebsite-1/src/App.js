import React from "react"
import {Content} from "./components/Content"
import {NavBar} from "./components/NavBar"
import {Footer} from "./components/Footer"

//style import
import styles from "./style.module.css"


export function App(){
    return(
        <div className="container">
            <NavBar />
            <Content />
            <Footer />
        </div>
    );
}