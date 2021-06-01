import styles from "./App.module.css"

export const App = () => {
    return (
        <div className={styles.root}>
            <div className={styles.block}>
                <p>
                    <a className={styles.link} target={"_blank"} rel={"noreferrer"} href="https://google.com">Lorem</a> Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный дизайн.
                </p>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный дизайн.
                </p>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный дизайн.
                </p>
            </div>
            <form action="#">
                <input type="text" className={styles.textInput}/>
                <button type={"submit"} className={styles.textButton}>Send</button>
            </form>
            <ul className={styles.list}>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
            </ul>
        </div>
    )
}