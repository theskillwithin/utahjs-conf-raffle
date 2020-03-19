import Head from 'components/GlobalHead'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { theatersData, theaters } from 'definitions/theater'

import styles from './styles.module.css'

const Theater = () => {
  const router = useRouter()
  const { id } = router.query
  const theaterNumber = String(id)
  const theaterData = theatersData[theaterNumber]

  if (!theaters.includes(theaterNumber) || !theaterData)
    return (
      <div>
        <Head title="Invalid Theater" />
        <h1>Invalid Theater</h1>
        <Link href="/">
          <a className={styles.select}>&larr; Select Theater</a>
        </Link>
      </div>
    )
  return (
    <div>
      <Head title={`UtahJS Raffle - Theater ${id}`} />
      <Link href="/">
        <a className={styles.select}>&larr; Select Theater</a>
      </Link>
      <h1>Theater: {id}</h1>
    </div>
  )
}

export default Theater
