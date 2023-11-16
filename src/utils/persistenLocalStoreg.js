// Define um item no localStorage com a chave e valor fornecidos.
const setItem = (key, item) => {
    localStorage.setItem(key, item);
}

// Armazena um objeto no localStorage convertendo-o para uma string JSON.
const setUserStorageObjeto = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// Recupera um objeto do localStorage e o converte de volta para sua forma original.
const getUserStorageObjeto = (key) => JSON.parse(localStorage.getItem(key));

// Obtém o valor armazenado no localStorage para uma determinada chave.
const getItem = (key) => localStorage.getItem(key);

// Remove um item do localStorage com base na chave fornecida.
const deleteItem = (key) => localStorage.removeItem(key);

// Exporta as funções para serem usadas em outros arquivos ou módulos.
export { setItem, getItem, deleteItem, setUserStorageObjeto, getUserStorageObjeto }
