const checkValue = param => (param < 10 ? `0${param}` : param)

const DateTime = param => {
  const date = new Date(param)
  const day = checkValue(date.getDate())
  const month = checkValue(date.getMonth())
  const year = checkValue(date.getFullYear())
  const hour = checkValue(date.getHours())
  const minutes = checkValue(date.getMinutes())
  return `${day}.${month}.${year} ${hour}:${minutes}`
}

export default DateTime
