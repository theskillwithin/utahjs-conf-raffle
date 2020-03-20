import Head from 'components/GlobalHead'
import SelectTheater from 'components/SelectTheater'

const Custom404 = () => (
  <div>
    <Head title="404" />
    <SelectTheater />
    <h1>404 - Page Not Found</h1>
    <style jsx>{`
      .go-home {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 21px;
      }
    `}</style>
  </div>
)

export default Custom404
