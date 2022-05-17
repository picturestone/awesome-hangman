import fetch from 'node-fetch'

const token = "RJHUJS";
export const status = () => {
    return fetch('https://trayport-hangman.azurewebsites.net/api/status', {
        headers: {Authorization: 'Bearer RJHUJS'}
    })
}

export const guess = (id, char) => {
    return fetch(`https://trayport-hangman.azurewebsites.net/api/guess/${id}/${char}`, {
        method: "PUT",
        headers: {Authorization: 'Bearer RJHUJS'}
    })
}

export const submit = (id, word) => {
    return fetch(`https://trayport-hangman.azurewebsites.net/api/submit/${id}/${word}`, {
        method: "POST",
        headers: {Authorization: 'Bearer RJHUJS'}
    })
}