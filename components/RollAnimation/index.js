import { useState, useLayoutEffect } from 'react'
import { string } from 'prop-types'
import { alphabet } from 'utils/alphabet'
import styles from './styles.module.css'

const Ring = ({ ring: { deg, arr } }) => {
  const degs = Array(arr.length)
    .fill()
    .map((_, i) => (360 / arr.length) * i + 1)
  const slotRransform = i => `rotateX(${degs[i]}deg)`
  return (
    <div className={styles.ring} style={{ transform: `rotateX(${deg}deg)` }}>
      {arr.map((number, i) => (
        <div
          key={number}
          className={styles.slot}
          id={number}
          style={{
            transform: `${slotRransform(i)} translateZ(202.5px)`,
          }}
        >
          {number}
        </div>
      ))}
    </div>
  )
}

const RollAnimation = ({ randomSeat }) => {
  useLayoutEffect(() => {
    rotate()
  }, [randomSeat])

  const [rings, setRing] = useState([
    {
      deg: 0,
      arr: alphabet,
    },
    {
      deg: 0,
      arr: Array(21)
        .fill()
        .map((_, i) => i),
    },
    {
      deg: 0,
      arr: Array(21)
        .fill()
        .map((_, i) => i),
    },
  ])
  // const splitString = [...randomSeat]

  const rotate = () => {
    const update = rings.map((ring, i) => {
      const { arr, deg } = ring
      const degs = Array(arr.length)
        .fill()
        .map((_, i) => (360 / arr.length) * i + 1)
      const generatedDeg =
        degs[Math.floor(Math.random() * degs.length)] +
        360 * Math.floor(Math.random() * 10 + 1)
      console.log(generatedDeg)
      const newDeg = generatedDeg === deg ? generatedDeg + 360 : generatedDeg

      return { deg: newDeg, arr }
    })
    setRing(update)
  }

  return (
    <div className={styles.slots}>
      <div className={styles.rings}>
        <Ring ring={rings[0]} />
        <Ring ring={rings[1]} />
        <Ring ring={rings[2]} />
      </div>
    </div>
  )
}

RollAnimation.propTypes = {
  randomSeat: string,
}

RollAnimation.defaultProps = {
  randomSeat: null,
}

export default RollAnimation
