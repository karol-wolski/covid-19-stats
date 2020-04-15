import { DayBack } from './DateTime'

const SetDayBackInArrayObjects = (array, property, numOfDays) => {
  return array.map(item => {
    const obj = { ...item }
    obj[property] = DayBack(item[property], numOfDays)
    return obj
  })
}

export default SetDayBackInArrayObjects
