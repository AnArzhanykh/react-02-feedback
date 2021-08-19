import PropTypes from 'prop-types'
import styles from './Statistics.module.css'


const Statistics = (props) => {


    const listItems = Object.keys(props).map((name) =>{
        // const obj = {};
        // console.log(name);
        // obj[name] = props[name];
        return ('positivePercentage' === name) ?
            <li key ={name} className={styles.item}> Positive feedback: {props[name]}%</li>
            : <li key ={name} className={styles.item}> {props[name]}: {[name]}</li> 
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