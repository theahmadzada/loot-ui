import styles from "./RegisterPage.module.css"

export const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.logo} src={"src/assets/logo.png"} alt={"logo"}></img>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.body}>
                    <div className={styles.text}>Create your account</div>
                    <input className={styles.inputContainer} type={"text"} placeholder={"First name"}></input>
                    <input className={styles.inputContainer} type={"text"} placeholder={"Last name"}></input>
                    <input className={styles.inputContainer} type={"email"} placeholder={"Email"}></input>
                    <input className={styles.inputContainer} type={"password"} placeholder={"Password"}></input>
                    <div className={styles.buttonContainer}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}