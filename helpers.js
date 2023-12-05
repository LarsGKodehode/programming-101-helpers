/**
 * Returns a function that writes the message to the element
 * 
 * @example
 * // index.html
 * <div id="test"></div>
 * 
 * // main.js
 * let display = setupDisplay("test")
 * 
 * display("Hello World")
 * 
 * 
 * @param {string} elementId 
 */
export function setupDisplay(elementId) {
  const element = document.querySelector(`#${elementId}`)

  if (!element) {
    throw new Error(`Could not find element with ID="${elementId}" in document.\nEnsure that your script is setup correctly:\n\n<scrip defer type="module" src="main.js"></script>\n\nand that you have and element with an id:\n\n<element id="${elementId}">\n`)
  }

  /**
   * Updates the text content of the element it was setup for
   * 
   * @param {string} message 
   */
  const updateDisplay = (message) => { element.textContent = message }

  return updateDisplay
}

/**
 * Returns a promise which will be resolved after the given time
 * 
 * @example
 * await sleep(1000) // sleeps for 1second / 1000 milliseconds
 * 
 * await sleep(2000) // sleeps for 2second / 2000 milliseconds
 * 
 * @param {number} milliseconds 
 * @returns 
 */
export function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}