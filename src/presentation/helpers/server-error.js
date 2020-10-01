module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super('An internal error')
    this.name = 'ServerError'
  }
}
