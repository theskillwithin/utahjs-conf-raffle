import styles from './styles.module.css'
import { array } from 'prop-types'

const PastSelections = ({ pastSelections }) => (
  <pre className={styles.past}>
    {!!pastSelections &&
      !!pastSelections.length &&
      pastSelections.map((p, i) => <span key={i}>{p}</span>)}
  </pre>
)

PastSelections.propTypes = {
  pastSelections: array,
}

PastSelections.defaultProps = {
  pastSelections: null,
}

export default PastSelections
