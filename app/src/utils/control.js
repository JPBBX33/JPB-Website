export default class Control {
  
  static isValidEmail(email) {
    if (typeof email !== 'string') {
      throw new TypeError("L'email n'est pas valide");
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexEmail.test(email);
  }
  
  static isValidPhone(tel) {
    if (typeof tel !== 'string') {
      throw new TypeError("Le numéro de téléphone n'est pas valide");
    }
    const regexPhoneNumber = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    return regexPhoneNumber.test(tel);
  }
  
  static isValidInputText(text) {
    if (typeof text !== 'string' || text.trim().length === 0) {
      throw new TypeError("Veuillez remplir les champs obligatoires");
    }
    return true; // Vous pouvez retourner vrai si la validation passe
  }
}