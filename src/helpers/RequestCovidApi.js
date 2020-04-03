const Request = async path => {
  const method = 'GET'
  const headers = {
    'x-rapidapi-host': process.env.REACT_APP_COVID19_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_COVID19_API_KEY,
  }
  const response = await fetch(
    `${process.env.REACT_APP_COVID19_API_URL}${path}`,
    {
      headers,
      method,
    }
  )
  return response
}

export default Request
