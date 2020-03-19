import Head from 'components/GlobalHead'
import Link from 'next/link'
import { theaters } from 'definitions/theater'

const Home = () => (
  <>
    <Head />
    <img className="logo" src="/utahjs-logo.png" alt=" " />
    <h1 className="title">UtahJS Conf Raffle</h1>

    <ul className="select-theater">
      {theaters.map(theater => (
        <li key={theater}>
          <Link href="/theater/[id]" as={`/theater/${theater}`}>
            <a>Theater {theater}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      .logo {
        margin-bottom: 3rem;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title {
        text-align: center;
      }

      .select-theater {
        padding-left: 0;
        list-style-type: none;
        margin-top: 2rem;
      }

      .select-theater a {
        font-size: 2rem;
      }

      .select-theater li + li {
        margin-top: 1em;
      }
    `}</style>
  </>
)

export default Home
