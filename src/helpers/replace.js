const replace = (string, searchValue, newValue, all = false) =>
  all
    ? string.replace(new RegExp(searchValue, 'g'), newValue)
    : string.replace(searchValue, newValue)

export default replace
