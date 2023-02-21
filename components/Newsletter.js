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
    <div className="max-w-7xl mx-auto my-12 px-5 py-14 bg-salmon-100 rounded-2xl">
      <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-center">
        Sign up to Our <span className="underline underline-offset-8 text-poppy-900">Newsletter</span>
      </h2>
      <form onSubmit={handleSubmit} className="md:w-6/12 m-auto">
        <div className="mt-5 lg:mt-12 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="flex bg-poppy-800 hover:bg-poppy-900 shadow hover:shadow-lg transition-all duration-100 ease-linear rounded-md max-w-fit mx-auto text-white px-7 py-3"
          >
            Subscribe
          </button>
        </div>

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
