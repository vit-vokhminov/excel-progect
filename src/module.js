console.log('Module.js')

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
async function start() {
  return await Promise.resolve('async working !')
}

start().then(console.log)
