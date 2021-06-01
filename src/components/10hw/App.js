import styles from "./App.module.css"

export const App = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <header>Стилизируй с помощью псевдоклассов</header>
                <div>
                    <ul className={styles.first}>
                        <li>Put on this page information about your product</li>
                        <li>A detailed description of your product</li>
                        <li>Tell us about the advantages and merits</li>
                        <li>Associate the page with the payment system</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.second}>
                        <li>Put on this page information about your product</li>
                        <li>A detailed description of your product</li>
                        <li>Tell us about the advantages and merits</li>
                        <li>Associate the page with the payment system</li>
                    </ul>
                </div>
                <a href="https://google.com">Full Story</a>
                <input type="text"/>
            </div>
        </div>
    )
}