import styles from './Statistics.module.css'


const Statistics = (props) => {
    console.log(props);
    return(
        <div>{props.countTotalFeedback()}</div>
    )
    // const listItems = Object.keys(props).map((name, index) =>{
    //     const obj = {};
    //     obj[name] = props[name];
    //     return ('positivePercentage' === name) ?
    //         <li key ={index} className={styles.item}> Positive feedback: {obj[name]}%</li>
    //         : <li key ={index} className={styles.item}> {name}: {obj[name]}</li> 
    // });

    // return(
    //     <div className={styles.statistics}>
    //         <h2>Statistics</h2>
    //         <ul className={styles.menu}>
    //             {listItems}
    //         </ul>
    //     </div>
    // )
}

Statistics.defaultProps = {
    positivePercentage: 0,
} 

Statistics.propTypes = {

}



export default Statistics;