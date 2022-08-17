import Nav from './Nav'
import MyHead from './MyHead'
import Footer from './Footer'
import BackGroundClouds from '../BackgroundClouds/BackgroundClouds'


export default function Layout({ children }) {
    return (<>
        <MyHead />
        <main>
            <Nav />
            <BackGroundClouds/>
            {children}
        </main>

        <Footer />
    </>)
}

