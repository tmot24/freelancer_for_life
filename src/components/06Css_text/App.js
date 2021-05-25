import {LoremIpsum} from "react-lorem-ipsum"
import styles from "./App.module.css"

export const App = () => {
    return (
        <div>
            <div><LoremIpsum/></div>
            <br/><div className={styles.arial}><LoremIpsum/></div>
            <br/><div className={styles.fontSize30}><LoremIpsum/></div>
            <br/><div className={styles.italic}><LoremIpsum/></div>
            <br/><div className={styles.font700}><LoremIpsum/></div>
            <br/><div className={styles.colorRed}><LoremIpsum/></div>
            <br/><div className={styles.colorRed}><LoremIpsum/></div>
            <br/><div className={styles.textRight}><LoremIpsum avgSentencesPerParagraph={8}/></div>
            <br/><div className={styles.decoration}><LoremIpsum/></div>
            <br/><div className={styles.shadow}><LoremIpsum/></div>
            <br/><div className={styles.uppercase}><LoremIpsum/></div>
            <br/><div className={styles.ident}><LoremIpsum/></div>
            <br/><div className={styles.ident}><LoremIpsum/></div>
            <br/><div className={styles.letterSpace}><LoremIpsum/></div>
            <br/><div className={styles.wordSpace}><LoremIpsum/></div>
            <br/><div className={styles.whiteSpace}><LoremIpsum/></div>
            <br/><div className={styles.lineHeight}><LoremIpsum/></div>
        </div>
    )
}