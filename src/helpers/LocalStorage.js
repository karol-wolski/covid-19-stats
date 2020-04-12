export const saveObjectToLocalStorage = (name, obj) =>
  localStorage.setItem(name, JSON.stringify(obj))

export const getObjectFromLocalStorage = name =>
  JSON.parse(localStorage.getItem(name))

export const removeObjectFromLocalStorage = name =>
  localStorage.removeItem(name)
