import fetch from 'node-fetch'

export const status = async () => {
// const Bearer: <token>
    const token = "RJHUJS";
    return await fetch('https://trayport-hangman.azurewebsites.net/api')
}

export default status;