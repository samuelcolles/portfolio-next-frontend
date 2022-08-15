import Style from './footer.module.scss'

export default function Footer({copyRight}){
    return <footer className={Style.root + " background-box background-color-a"}>
        <div className={Style.content+" container"}>
            <p>Ⓒ Samuel Colles 2022</p>
        </div>
    </footer>
}