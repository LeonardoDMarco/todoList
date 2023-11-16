const setItem = (key, item) => {
    localStorage.setItem(key, item)
}

const setUserStorageObjeto = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
const getUserStorageObjeto = (key) => JSON.parse(localStorage.getItem(key))

const getItem = (key) => localStorage.getItem(key)
const deleteItem = (key) => localStorage.removeItem(key)

export { setItem, getItem, deleteItem, setUserStorageObjeto, getUserStorageObjeto}
