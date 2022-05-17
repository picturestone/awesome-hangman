import {guess, status, submit} from "./api.mjs";

console.log('hello world');

const occurrenceArray = [
    'E', 'S', 'I', 'A', 'R', 'N', 'T', 'O', 'L', 'C', 'D', 'U', 'G', 'P', 'M', 'H', 'B', 'Y', 'F', 'V', 'K', 'W', 'Z', 'X', 'J', 'Q'
];

const main = async () => {
    try {
        const response = await status()
        console.log(response.status);
        console.log(await response.json())

        const res2 = await guess(0, 'e')
        console.log(res2.status);
        console.log(await res2.json())

        const res3 = await submit(0, 'first')
        console.log("POST: " + res3.status);
        console.log(await res3.json())
    } catch (e) {
        console.error(e)
    }
}
main().then(() => {})