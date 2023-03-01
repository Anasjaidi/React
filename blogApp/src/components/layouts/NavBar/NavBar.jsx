import styles from './NavBar.module.css'

export default () => {
    return (
        <div className={styles.top}>
            <div>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest"></i>
            </div>
        </div>
    )
}
