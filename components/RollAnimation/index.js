import { useState, useLayoutEffect } from 'react'
import { string } from 'prop-types'
import { alphabet } from 'utils/alphabet'
import styles from './styles.module.css'

const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const Ring = ({ numbers, transform }) => {
  return (
    <div className={styles.ring} style={{ transform }}>
      {numbers.map(number => (
        <div key={number} className={styles.slot} id={number}>
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
  const [ring, setRing] = useState({
    0: {
      next: 2,
      curr: 2,
      prev: 0,
      deg: 0,
      arr: alphabet,
    },
    1: {
      next: 2,
      curr: 2,
      prev: 0,
      deg: 0,
      arr: Array(20)
        .fill()
        .map((_, i) => i),
    },
    2: {
      next: 0,
      curr: 2,
      prev: 0,
      deg: 0,
      arr: Array(20)
        .fill()
        .map((_, i) => i),
    },
  })
  const [transforms, setTransform] = useState({
    0: null,
    1: null,
    2: null,
  })
  // const splitString = [...randomSeat]

  const degs = [0, 45, 90, 135, 180, 225, 270, 315, 360]

  const rotate = () => {
    const rings = [0, 1, 2]
    rings.forEach((el, i) => {
      let obj = ring[i],
        deg = obj.deg,
        curr = obj.curr,
        arr = obj.arr,
        res = deg - degs[rnd(0, degs.length)] * rnd(1, 30)
      setTransform(t => ({ ...t, [i]: `rotateX(${res}deg)` }))
      obj.deg = res
      let cnt = Math.abs(res - deg) / (360 / arr.length),
        tmp = arr.slice(arr.indexOf(curr)),
        next,
        prev
      for (let i = 0; i <= cnt; i++) {
        tmp.push.apply(tmp, arr)
        curr = tmp[i]
        next = tmp[i - 1]
        prev = tmp[i + 1]
      }
      obj.curr = curr
      if (cnt > 0) {
        obj.next = next
        obj.prev = prev
      }
      setRing(current => ({ ...current, [i]: obj }))
    })
  }

  return (
    <div className={styles.slots}>
      <div className={styles.rings}>
        <Ring numbers={ring[0].arr} transform={transforms[0]} />
        <Ring numbers={ring[1].arr} transform={transforms[1]} />
        <Ring numbers={ring[2].arr} transform={transforms[2]} />
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
