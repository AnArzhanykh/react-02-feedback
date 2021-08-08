import React from "react";
import styles from './Section.module.css'


const Section =({title, state}) =>{
    console.log(state);
    return(
        <div className ={styles.section}>
            {/* <p>{state}</p> */}
            <h1 className={styles.title}>{title}</h1>
        </div>
        
    )
} 

export default Section;