const DateTime = param => {
  const date = new Date(param)
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  let hour = date.getHours()
  hour = hour < 10 ? `0${hour}` : hour
  let minutes = date.getMinutes()
  minutes = minutes < 10 ? `0${minutes}` : minutes
  return `${day}.${month}.${year} ${hour}:${minutes}`
}

export default DateTime
