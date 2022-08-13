import Nav from './Nav'
import MyHead from './MyHead'
import Footer from './Footer'


export default function Layout({ children }) {
    return (<>
        <MyHead />
        
        <main>
        <Nav />
            {children}
        </main>
        <div style={{height:"100%"}} />
        <Footer />
    </>)
}

