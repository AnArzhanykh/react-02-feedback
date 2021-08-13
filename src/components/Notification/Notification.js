import styles from './Notification.module.css'
import PropTypes from 'prop-types'

const Notification = ({message })=>{
    return <div className={styles.container}>{message}</div>
}

Notification.defaultProps = {
    message: 'No feedback given'
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification