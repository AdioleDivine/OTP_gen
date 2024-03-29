/**
 * Generate Random Characters
 */
const digits = '0123456789'
const specialChars = '#!&@'
const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function rand (min, max) {
  const random = Math.random()
  return Math.floor(random * (max - min) + min)
}

module.exports = {
  /**
   * Generate OTP of the length
   * @param  {number} length length of password.
   * @param  {object} options
   * @param  {boolean} options.digits Default: `true` true value includes digits in OTP
   * @param  {boolean} options.specialChars Default: `true` true value includes specialChars in OTP
   * @param  {boolean} options.alphabets Default: `false` true value generates random alphabets
   */
  generate: function (length, options) {
    length = length || 10
    const generateOptions = options || {}

    generateOptions.digits = Object.prototype.hasOwnProperty.call(generateOptions, 'digits') ? options.digits : true
    generateOptions.specialChars = Object.prototype.hasOwnProperty.call(generateOptions, 'specialChars') ? options.specialChars : true
    generateOptions.alphabets = Object.prototype.hasOwnProperty.call(generateOptions, 'alphabets') ? options.alphabets : true

    const allowsChars = ((generateOptions.digits || '') && digits) + ((generateOptions.alphabets || '') && alphabets) +
      ((generateOptions.specialChars || '') && specialChars)
    let password = ''
    while (password.length < length) {
      const charIndex = rand(0, allowsChars.length - 1)
      password += allowsChars[charIndex]
    }
    return password
  }

}