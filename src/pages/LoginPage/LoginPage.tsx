import styles from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.logo} src={"src/assets/logo.png"} alt={"logo"}></img>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.body}>
                    <div className={styles.text}>Sign In</div>
                    <input className={styles.inputContainer} type={"email"} placeholder={"Email"}></input>
                    <input className={styles.inputContainer} type={"password"} placeholder={"Password"}></input>
                    <div className={styles.buttonContainer}>Sign In</div>
                    <div>Don't have an account? <a>Sign Up</a></div>
                </div>
            </div>
        </div>
    )
}