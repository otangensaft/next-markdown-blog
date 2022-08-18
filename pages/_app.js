import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
