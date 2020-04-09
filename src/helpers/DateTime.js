const checkValue = param => (param < 10 ? `0${param}` : param)

export const DateTime = param => {
  const date = new Date(param)
  const day = checkValue(date.getDate())
  const month = checkValue(date.getMonth())
  const year = checkValue(date.getFullYear())
  const hour = checkValue(date.getHours())
  const minutes = checkValue(date.getMinutes())
  return `${day}.${month}.${year} ${hour}:${minutes}`
}

export const DayBack = (date, back) => {
  const d = new Date(date)
  d.setDate(d.getDate() - back)
  const day = checkValue(d.getDate())
  const month = checkValue(d.getMonth())
  const year = checkValue(d.getFullYear())
  return `${day}.${month}.${year}`
}
