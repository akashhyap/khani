import { useState, useEffect } from "react";
import axios from "axios";

const Newsletter = () => {
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target.elements;
    try {
      const subscriber = {
        email_address: email.value,
        status: "subscribed",
      };
      const res = await axios.post(
        `https://khani-blok.vercel.app/api/newsletter`,
        subscriber
      );
      // return res.data;
      // console.log(res.data);

      setSuccessMessage(
        "Thanks for contacting us! We will get back to you soon."
      );
    } catch (err) {
      if (err.response.status === 400) {
        // The email address already exists in the Mailchimp list
        // alert("Email already exists");
        // Show the error message on the frontend

        setErrorMessage("Email already exists");
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="md:w-7/12 m-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-7/12 m-auto text-md md:text-lg bg-white px-4 py-5 sm:p-6 border shadow sm:rounded-md"
      >
       
        <label className="mb-3">
          Email:
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
       
        <button
          type="submit"
          className="flex bg-poppy-800 hover:bg-poppy-900 shadow hover:shadow-lg transition-all duration-100 ease-linear rounded-md max-w-fit mx-auto text-white mb-5  px-7 py-3"
        >
          Submit
        </button>
        {successMessage && (
          <p className="bg-blue-200 mt-4 text-center rounded-md text-base border p-2 border-dashed">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="bg-red-100 text-red-700 mt-4 text-center rounded-md text-base border p-2 border-dashed">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
