import styles from "./App.module.css"

export const App = () => {
    return (
        <div className={styles}>
            _color
            <p className={styles.color}/>
            _repeat
            <p className={styles.repeat}/>
            _position
            <p className={styles.position}/>
            _attachment
            <p className={styles.attachment}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
            _size
            <p className={styles.size}/>
            _pictures
            <p className={styles.pictures}/>
            <ul className={styles.list}>
                <li>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.
                </li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
    )
}