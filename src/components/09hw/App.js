import styles from "./App.module.css"
import man from "./light-man_copy.jpg"

export const App = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <div className={styles.contentTopCategory}>Travel</div>
                    <h1 className={styles.title}>Donec sed odio dui. Cras mattis consectetur purus sit amet
                        fermentum.</h1>
                </div>
                <div className={styles.contentImage}>
                    <img src={man} alt="img"/>
                </div>
                <div className={styles.contentBottom}>
                    <div className={styles.contentBottomText}>
                        <p>Donec aredsed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus
                            auctor fringilla.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo
                            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. </p>
                    </div>
                    <div className={styles.contentBottomInfo}>
                        <ul>
                            <li>Put on this page information about your product</li>
                            <li>A detailed description of your product</li>
                            <li>Tell us about the advantages and merits</li>
                            <li><span>Associate the page with the payment system</span></li>
                        </ul>
                        <a target={"_blank"} rel={"noreferrer"} href="https://google.com"><span>Full Story</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}