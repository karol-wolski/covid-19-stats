export const saveToLocalStorage = (name, obj) =>
  localStorage.setItem(name, JSON.stringify(obj))

export const getFromLocalStorage = name =>
  JSON.parse(localStorage.getItem(name))

export const removeFromLocalStorage = name => localStorage.removeItem(name)
