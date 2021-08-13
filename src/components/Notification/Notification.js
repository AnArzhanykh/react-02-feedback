import styles from './Notification.module.css'

const Notification = ({message })=>{
    return <div className={styles.container}>{message}</div>
}

export default Notification