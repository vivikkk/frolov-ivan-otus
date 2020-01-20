const timeParser = (value) => {
  if (!value) return ''
  const minutes = Math.floor(value / 60 % 60)
  const seconds = Math.floor(value % 60) < 10 ? `0${Math.floor(value % 60)}` : Math.floor(value % 60)

  return minutes ? `${minutes}:${seconds}` : `${seconds}`
}

const declOfNum = (value, declOfNum) => {
  const cases = [2, 0, 1, 1, 1, 2]

  return `${value} ${declOfNum[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]]}`
}

export { timeParser, declOfNum }
