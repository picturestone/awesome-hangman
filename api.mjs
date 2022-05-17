import fetch from 'node-fetch'

export const status = () => {
// const Bearer: <token>
    const token = "RJHUJS";
   return fetch('https://trayport-hangman.azurewebsites.net/api/status', {
        headers: {Authorization: 'Bearer RJHUJS'}
    })
}

// export default status;