const getDayWithOrdinal = (day: number) => {
  var s = ['th', 'st', 'nd', 'rd']
  var v = day % 100

  return `${day}${s[(v - 20) % 10] || s[v] || s[0]}`
}

export default getDayWithOrdinal
