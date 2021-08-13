import PropTypes from 'prop-types'
import styles from './Statistics.module.css'


const Statistics = (props) => {
    // console.log(countPositiveFeedbackPercentage);
    // return(
    //     <div>
    //         <div>{countTotalFeedback()} </div>
    //         <div>{countPositiveFeedbackPercentage()}%</div>
    //     </div>
    // )

    const listItems = Object.keys(props).map((name, index) =>{
        const obj = {};
        obj[name] = props[name];
        return ('positivePercentage' === name) ?
            <li key ={index} className={styles.item}> Positive feedback: {obj[name]}%</li>
            : <li key ={index} className={styles.item}> {name}: {obj[name]}</li> 
    });

    return(
        <div className={styles.statistics}>
            <h2>Statistics</h2>
            <ul className={styles.menu}>
                {listItems}
            </ul>
        </div>
    )
}


Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral:  PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
}



export default Statistics;