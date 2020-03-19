import Head from 'components/GlobalHead'
import { getParam } from 'utils/getParam'

const Theater = () => {
  const theater = getParam('theater')
  return (
    <div>
      <Head title={`UtahJS Raffle - Theater ${theater}`} />
      <h1>Theater: {theater}</h1>
    </div>
  )
}

export default Theater
