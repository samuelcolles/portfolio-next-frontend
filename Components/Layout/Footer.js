import Style from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer({copyRight}){
    return <footer className={Style.root + " background-box background-color-a"}>
        <div className={Style.content+" container"}>
            <p>Ⓒ Samuel Colles 2022</p>
            <div className={Style.iconBox}>

            <a href='https://www.linkedin.com/in/samuel-colles/'><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href='https://github.com/samuelcolles'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    </footer>
}