import styles from "./App.module.css"

export const App = () => {
    return (
        <>
            <div className={styles.first}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nostrum dicta,
                consectetur esse, cupiditate adipisci rem deleniti, deserunt maiores
                perferendis itaque obcaecati enim dolorum architecto neque magnam ipsam suscipit tenetur.
            </div>

            <span className={styles.second}>Lorem ipsum dolor sit amet, </span>
            <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </a>

            <div className={styles.third}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nostrum dicta,
                consectetur esse, cupiditate adipisci rem deleniti, deserunt maiores perferendis itaque obcaecati enim
                dolorum architecto neque magnam ipsam suscipit tenetur.
            </div>

            <div className={styles.fourthAmet}>Lorem ipsum dolor sit amet</div>
            <p className={styles.fifthAmet}>Lorem ipsum dolor sit amet</p>

            <div>
                <span className={styles.sixth}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <a className={styles.seventh} href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
            </div>

            <span className={styles.last}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </>
    )
}