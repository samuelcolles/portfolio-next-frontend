import Layout from '../Components/Layout'
import '../styles/style.scss'



export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}