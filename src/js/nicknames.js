export default class Validator {
  static validateUsername(username){
  return !(/[^\w^-]/).test(username) && (!(/\d\d\d/.test(username)) && !(/^[\d-_]/).test(username) && !(/[\d-_]$/.test(username)))
  }
}
