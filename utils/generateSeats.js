export const generateSeats = (rows, columns) => {
  if (!rows || !columns) return []
  const rowsArray = [...Array(rows).keys()]
  return rowsArray.map(row => {
    const colArray = [...Array(columns).keys()]
    const rowLetter = String.fromCharCode(97 + row)
    return colArray.map(col => `${rowLetter}${col + 1}`)
  })
}
