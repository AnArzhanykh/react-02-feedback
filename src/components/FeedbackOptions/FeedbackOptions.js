import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback }) =>{
    const arr = []
    for(let key in options){
        arr.push(key)
    }
    return(
        <div className={styles.container}>
            {arr.map(item => <button className={styles.button__size} 
                                                key={item} 
                                                onClick={()=>onLeaveFeedback(item)}>
                                                    {item}
                                        </button>)}
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