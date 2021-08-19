import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback }) =>{

    const item = Object.keys(options).map(item => <button className={styles.button__size} key={item} onClick={()=>onLeaveFeedback(item)}>{item}</button>)
    return(
        <div className={styles.container}>
            {item}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape(
        {
            good: PropTypes.number.isRequired,
            neutral:  PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;