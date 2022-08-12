import Link from 'next/link'
import styles from '../styles/nav.module.scss'

const Nav = () => {
    return (
        <div className="background-box background-color-a">
            <nav className={ styles.nav+" container"}>
                <h1 className="okay">Samuel Colles</h1>
                <Link href='/'>About</Link>
                <Link href='/resume'>Resume</Link>
                {/* <Link href='/blog'>Blog</Link> */}
                <Link href='/contact'>Contact</Link>


            </nav>
        </div>

    )
}

export default Nav