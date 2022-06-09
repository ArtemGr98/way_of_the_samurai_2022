import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.nav__item}>
                Profile
            </a>
            <a href="#" className={styles.nav__item}>
                Massages
            </a>
            <a href="#" className={styles.nav__item}>
                News
            </a>
            <a href="#" className={styles.nav__item}>
                Music
            </a>
            <a href="#" className={styles.nav__item}>
                Settings
            </a>
        </nav>
    )
}

export default Nav