import styles from './NavBar.module.css'

export default () => {
    return (
        <div className={styles.top}>
            <div className={styles.socials}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest"></i>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>WRITE</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className={styles.profile}>
                <img src="https://media.licdn.com/dms/image/C4E03AQHs6vJzdQoDbg/profile-displayphoto-shrink_800_800/0/1642689120373?e=2147483647&v=beta&t=1usZy9M1uODeBSn1gj5HhBfuEdePubgmmBnBW9oWZ78" alt="" />
                <i className="fa-regular fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
