import Head from 'components/GlobalHead'
import Link from 'next/link'
import { theaters } from 'definitions/theater'

const Home = () => (
  <div className="container">
    <Head />
    <main>
      <img src="/utahjs-logo.png" alt=" " />
      <h1 className="title">UtahJS Conf Raffle</h1>

      <ul className="select-theater">
        {theaters.map(theater => (
          <li key={theater}>
            <Link href={{ pathname: '/theater', query: { theater } }}>
              <a>Theater {theater}</a>
            </Link>
          </li>
        ))}
      </ul>
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

      .title {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
