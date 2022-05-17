import {status} from "./api.mjs";

console.log('hello world');

const occuranaceArray = [
    'E', 'S', 'I', 'A', 'R', 'N', 'T', 'O', 'L', 'C', 'D', 'U', 'G', 'P', 'M', 'H', 'B', 'Y', 'F', 'V', 'K', 'W', 'Z', 'X', 'J', 'Q'
];


const main = async () => {
    try {
        const response = await status()
        console.log(response.status);
        console.log(await response.json())
    } catch (e) {
        console.error(e)
    }
}
main().then(() => {})