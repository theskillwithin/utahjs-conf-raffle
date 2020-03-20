// import App from 'next/app'
import 'normalize.css'
import './global.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <a
          href="https://github.com/theskillwithin/utahjs-conf-raffle"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/theskillwithin/utahjs-conf-raffle
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Build with NextJS
        </a>
      </footer>

      <style jsx>{`
        .container {
          position: relative;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 6.6rem;
          border-top: 1px solid var(--light-gray);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer > * + * {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
