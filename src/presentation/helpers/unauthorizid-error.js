module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super('Unauthorized')
    this.name = ''
  }
}
