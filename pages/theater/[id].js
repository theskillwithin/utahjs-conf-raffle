import { useState } from 'react'
import Head from 'components/GlobalHead'
import { useRouter } from 'next/router'
import { theatersData, theaters } from 'definitions/theater'
import PastSelections from 'components/PastSelections'
import SelectTheater from 'components/SelectTheater'
import { alphabet } from 'utils/alphabet'
import { generateSeats } from 'utils/generateSeats'

import styles from './styles.module.css'

const Theater = () => {
  const [randomSeat, setRandomSeat] = useState(null)
  const [pastSelections, setPastSelections] = useState([])
  const [filterPast, setFilterPast] = useState(true)
  const [customRow, setCustomRow] = useState(3)
  const [customColumn, setCustomColumn] = useState(3)
  const router = useRouter()
  const { id } = router.query
  const theaterID = String(id)
  const theaterData =
    theaterID !== 'custom'
      ? theatersData[theaterID]
      : { id: 'custom', rows: customRow, seatsPerRow: customColumn }

  const seats = generateSeats(theaterData?.rows, theaterData?.seatsPerRow)

  const totalSeats = seats && seats.reduce((acc, curr) => curr.length + acc, 0)

  const reset = () => {
    setRandomSeat(null)
    setPastSelections([])
  }

  const getRandomSeat = () => {
    const randomSeat =
      seats[Math.floor(Math.random() * seats.length)][
        Math.floor(Math.random() * theaterData?.seatsPerRow)
      ]

    if (filterPast && pastSelections.includes(randomSeat)) {
      if (pastSelections.length >= totalSeats - 1) {
        reset()
      }
      return getRandomSeat()
    }

    setRandomSeat(randomSeat)
    setPastSelections(past => [...past, randomSeat])
  }

  if (!theaters.includes(theaterID) || !theaterData)
    return (
      <div>
        <Head title="Invalid Theater" />
        <h1>Invalid Theater</h1>
        <SelectTheater />
      </div>
    )
  return (
    <div className={styles.conatiner}>
      <Head title={`UtahJS Raffle - Theater ${id}`} />
      <SelectTheater />

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
        {theaterID === 'custom' && (
          <div className={styles.custom}>
            <label htmlFor="letter-select">A - </label>
            <select
              name="letter"
              id="letter-select"
              onChange={e => setCustomRow(parseInt(e.target.value))}
              defaultValue={customRow}
            >
              {alphabet.map((letter, index) => (
                <option key={letter} value={index + 1}>
                  {letter}
                </option>
              ))}
            </select>
            <label htmlFor="letter-select">Seats Per Row: </label>
            <input
              type="number"
              value={customColumn}
              onChange={e => setCustomColumn(parseInt(e.target.value))}
              min="1"
              max="900"
            />
          </div>
        )}
      </div>

      <section className={styles.getRandom}>
        <h1>Theater: {id}</h1>
        <button
          onClick={getRandomSeat}
          disabled={theaterID === 'custom' && !customColumn}
        >
          Get Random Seat!
        </button>
        {!!randomSeat && <h1>{randomSeat}</h1>}
      </section>

      <PastSelections pastSelections={pastSelections} />
    </div>
  )
}

export default Theater
