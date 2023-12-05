import { setupDisplay, sleep } from "./helpers.js"

const display = setupDisplay("display")

display("Hello World")

await sleep(2000)

display("Testing")

await sleep(2000)

display("Another test")