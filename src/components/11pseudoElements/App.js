import styles from "./App.module.css"

export const App = () => {
    return (
        <div className={styles.root}>
            <p className={styles.text}>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века.
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
            <ul className={styles.list}>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
            <input type="text"/>
            
        </div>
    )
}