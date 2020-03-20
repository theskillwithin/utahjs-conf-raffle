import styles from './styles.module.css'
import Link from 'next/link'

const SelectTheater = () => (
  <Link href="/">
    <a className={styles.select}>&larr; Select Theater</a>
  </Link>
)

export default SelectTheater
