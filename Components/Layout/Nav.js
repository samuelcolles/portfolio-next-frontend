import Link from 'next/link'
import style from './nav.module.scss'

const Nav = () => {
    return (
        <div className="background-box background-color-a">
            <nav className={style.nav + " container"}>
                <h1 className="okay">Samuel Colles</h1>
                <div className={style.linkShelf}>
                    <Link href='/' >About</Link>
                    <Link href='/resume'>Resume</Link>
                    {/* <Link href='/blog'>Blog</Link> */}
                    <Link href='/contact'>Contact</Link>
                </div>
            </nav>
        </div>

    )
}

export default Nav