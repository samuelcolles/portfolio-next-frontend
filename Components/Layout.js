import Nav from './Nav'
import MyHead from './MyHead'
import Footer from './Footer'


export default function Layout({ children }) {
    return (<>
        <MyHead />
        <Nav />
        <main>
            {children}
        </main>
        <div style={{height:"100%"}} />
        <Footer />
    </>)
}

