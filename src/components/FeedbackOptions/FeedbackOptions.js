import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback }) =>{
    const arr = []
    for(let key in options){
        arr.push(key)
    }
    return(
        <div className={styles.container}>
            {arr.map((item, index) => <button className={styles.button__size} 
                                                key={index} 
                                                onClick={()=>onLeaveFeedback(index)}>
                                                    {item}
                                        </button>)}
        </div>
    )
}

export default FeedbackOptions;