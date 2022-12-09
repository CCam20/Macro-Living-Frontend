


const baseURL = 'http://localhost:8080/api/users/'

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const updateUser = (payload) => {
    console.log(payload)
    const id = payload.id;

    return fetch(baseURL + id, {
        // mode: "no-cors",
        method: 'PUT',
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}

    })
}

