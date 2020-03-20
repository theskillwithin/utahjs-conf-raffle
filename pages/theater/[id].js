import { useState } from 'react'
import Head from 'components/GlobalHead'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { theatersData, theaters } from 'definitions/theater'

import styles from './styles.module.css'

const generateSeats = (rows, columns) => {
  const rowsArray = [...Array(rows).keys()]
  return rowsArray.map(row => {
    const colArray = [...Array(columns).keys()]
    const rowLetter = String.fromCharCode(97 + row)
    return colArray.map(col => `${rowLetter}${col + 1}`)
  })
}

const Theater = () => {
  const [randomSeat, setRandomSeat] = useState(null)
  const [pastSelections, setPastSelections] = useState([])
  const [filterPast, setFilterPast] = useState(true)
  const router = useRouter()
  const { id } = router.query
  const theaterNumber = String(id)
  const theaterData = theatersData[theaterNumber]

  const seats =
    theaterData && generateSeats(theaterData?.rows, theaterData?.seatsPerRow)

  const getRandomSeat = () => {
    const randomSeat =
      seats[Math.floor(Math.random() * seats.length)][
        Math.floor(Math.random() * theaterData?.seatsPerRow)
      ]

    if (filterPast && pastSelections.includes(randomSeat)) {
      return getRandomSeat()
    }

    setRandomSeat(randomSeat)
    setPastSelections(past => [...past, randomSeat])
  }

  const reset = () => {
    setRandomSeat(null)
    setPastSelections([])
  }

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
    <div className={styles.conatiner}>
      <Head title={`UtahJS Raffle - Theater ${id}`} />
      <Link href="/">
        <a className={styles.select}>&larr; Select Theater</a>
      </Link>

      <div className={styles.settings}>
        <div className={styles.setting}>
          <label htmlFor="dedups-setting">No Duplicate Results</label>
          <input
            id="dedups-setting"
            type="checkbox"
            checked={filterPast}
            onChange={() => setFilterPast(!filterPast)}
          />
        </div>
        <div>
          <button onClick={reset}>reset</button>
        </div>
      </div>

      <section>
        <h1>Theater: {id}</h1>
        <button onClick={getRandomSeat}>Get Random Seat!</button>
        {randomSeat ? <h1>{randomSeat}</h1> : null}
      </section>

      <pre className={styles.past}>
        {pastSelections && pastSelections.length
          ? pastSelections.map((p, i) => <span key={i}>{p}</span>)
          : null}
      </pre>
    </div>
  )
}

export default Theater
