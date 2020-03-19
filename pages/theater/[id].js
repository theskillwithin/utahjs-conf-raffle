import Head from 'components/GlobalHead'
import { useRouter } from 'next/router'

const Theater = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Head title={`UtahJS Raffle - Theater ${id}`} />
      <h1>Theater: {id}</h1>
    </div>
  )
}

export default Theater
