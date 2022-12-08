


const baseURL = 'http://localhost:8080/api/users/'

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}