import Head from 'components/GlobalHead'

const Home = () => (
  <div className="container">
    <Head />
    <main>
      <h1 className="title">UtahJS Confrence</h1>

      <p className="description">Raffle</p>

      <div className="grid"></div>
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
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 6.6rem;
        border-top: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer > * + * {
        margin-top: 1rem;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}</style>
  </div>
)

export default Home
