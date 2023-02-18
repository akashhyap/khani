import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("IDLE");

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className=" mx-auto max-w-7xl ">
      <h2>Newletter</h2>
      <div>
        <input
          type="email"
          value={email}
          className="mt-1 block w-full rounded-md border py-1 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`flex bg-poppy-800 hover:bg-poppy-900 shadow hover:shadow-lg transition-all duration-100 ease-linear rounded-md max-w-fit mx-auto text-white mb-5  px-7 py-3 ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
};

export default Newsletter;
