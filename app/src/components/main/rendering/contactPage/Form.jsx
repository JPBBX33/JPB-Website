export default function Form({
  formData = {},
  handleChange,
  handleSubmit,
  message,
  isValidData,
}) {
  return (
    <>
      <form
        className="flex flex-col w-full md:w-2/4 m-auto gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName">
              Nom : <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="p-2 border border-secondary-brun"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName">
              Prénom : <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="p-2 border border-secondary-brun"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">
              E-mail : <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`p-2 border border-secondary-brun`}
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="tel">Tèl :</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              className="p-2 border border-secondary-brun"
              onChange={handleChange}
              value={formData.tel}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message : <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className="p-2 border border-secondary-brun"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
        </div>
        <p className="text-sm">
          <span className="text-red-500">* </span> Champs obligatoires
        </p>
        {message && (
          <p
            className={`p-2 text-center text-secondary-ligth rounded-full text-sm  ${
              isValidData ? "bg-green-500" : "bg-red-500"
            } `}
          >
            {message}
          </p>
        )}
        <div className="m-auto">
          <button
            type="submit"
            className="py-2 px-4 border border-secondary-brun hover:bg-secondary-brun hover:text-secondary-ligth rounded-full transition-all duration-300"
          >
            Valider et envoyer
          </button>
        </div>
      </form>
    </>
  );
}
