const countPercent = (percentFor, percentOf, decimalPlace = 0) =>
  ((percentFor / percentOf) * 100).toFixed(decimalPlace)

export default countPercent
