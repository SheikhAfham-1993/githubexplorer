export const formatFigure = (figure: number) => {
  var val = Math.abs(figure).toString()
  if (Number(val) >= 1000) {
    val = (Number(val) / 1000).toFixed(2) + 'K'
  }
  return val
}
