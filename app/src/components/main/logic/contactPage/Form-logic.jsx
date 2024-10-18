"use client";
import { useState } from "react";
import ApiService from "../../../../service/apiService";
import SubmitContactForm from "../../../../usecases/submitContactForm";
import Form from "../../rendering/contactPage/Form";
export default function FormLogic() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    tel: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [isValidData, setIsValidData] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiService = new ApiService();
    const submitFormUseCase = new SubmitContactForm(apiService);

    try {
      const res = await submitFormUseCase.execute(formData, setFormData);

      if (res.message) {
        setMessage(res.message);
        setIsValidData(true);
      } else {
        setMessage("Erreur lors de la soumission du formulaire");
      }
    } catch (error) {
      setMessage(error.message);
      setIsValidData(false);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      message={message}
      isValidData={isValidData}
    />
  );
}
