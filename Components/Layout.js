import Nav from './Nav'
import MyHead from './MyHead'
import Footer from './Footer'


export default function Layout({ children }) {
    return (<>
        <MyHead />
    
        <Nav />
        {children}
        <Footer />
    </>)
}

