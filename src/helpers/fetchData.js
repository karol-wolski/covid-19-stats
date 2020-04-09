async function fetchData(
  api,
  Request,
  dataSetter,
  errorsSetter,
  loadingSetter
) {
  try {
    errorsSetter(false)
    const res = await Request(api)
    const json = await res.json()
    dataSetter(json)
    if (loadingSetter) loadingSetter(false)
  } catch (err) {
    if (loadingSetter) loadingSetter(false)
    errorsSetter(true)
  }
}

export default fetchData
