


const baseURL = 'http://localhost:8080/api/users/'

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const updateUser = (payload) => {
    console.log(payload)
    const id = payload.id;

    return fetch(baseURL + id, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}

    })
}

// export const putBooking = (payload) => {
//     const id = payload[0]._id;
//     const newPayload = {};
//     newPayload['isCheckedIn'] = payload[0].IsCheckedIn;
//     newPayload['email'] = payload[0].email;
//     newPayload['name'] = payload[0].name;

//     return fetch(baseURL + id, {
//         method: 'PUT',
//         body: JSON.stringify(newPayload),
//         headers: { 'Content-Type': 'application/json' }
//     })
// }