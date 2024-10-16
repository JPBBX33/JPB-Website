import control from "../utils/control";
export default class SubmitContactForm {

  constructor(apiService) {
    this.apiService = apiService;
  }

 async execute(formData, setFormData) {

    try {

      if(
        !control.isValidInputText(formData.lastName) ||
        !control.isValidInputText(formData.firstName) ||
        !control.isValidInputText(formData.message) ||
        !control.isValidInputText(formData.email)
      ) {
        throw new Error("Veuillez remplir les champs obligatoires");
      }

      if(!control.isValidEmail(formData.email)) {
        throw new Error("L'email n'est pas valide");
      }

      if(formData.tel && !control.isValidPhone(formData.tel)) {
        throw new Error("Le numéro de téléphone n'est pas valide");
      }

      const res = await this.apiService.post("/api/contact", formData);

      if (!res.ok) {
        throw new Error("Erreur lors de la soumission du formulaire");
      }

      const data = await res.json();

      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        tel: "",
        message: "",
      });

      return data;

    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
 }

}