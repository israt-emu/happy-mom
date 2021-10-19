import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    user,
    signUpWithEmailPass,
    error,
    setName,
    setEmail,
    setPass,
    setError,
    email,
    pass,
    updateInfo,
  } = useAuth();
  ///registration with email pass
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }
    signUpWithEmailPass();
    updateInfo();
  };
  //setting name
  const handleName = (e) => {
    setName(e.target.value);
  };
  //setting email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  //setting password
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div>
      <div className="lg:w-2/5 md:w-2/4 w-4/5 mx-auto shadow-lg rounded px-8 py-12 my-16">
        <h1 className="text-2xl font-bold text-center mb-8">
          Please Create An Account!
        </h1>
        <div className="lg:w-4/5 w-11/12 mx-auto">
          <form className=" mx-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              className="block w-full py-2 px-3 rounded bg-purple-100 mb-4"
              placeholder="Your Name"
              onBlur={handleName}
            />
            <input
              type="email"
              className="block w-full py-2 px-3 rounded bg-purple-100 mb-4"
              placeholder="Your Email"
              onBlur={handleEmail}
              required
            />
            <input
              type="password"
              className="block w-full py-2 px-3 rounded bg-purple-100 mb-4"
              placeholder="Password"
              onBlur={handlePass}
              required
            />
            <p className="text-red-600">{error}</p>
            <button
              className="py-2 px-3 rounded button text-white"
              type="submit"
            >
              Register
            </button>
          </form>
          <Link to="/login">
            <h1 className="text-purple-500 my-2">Already Have an Account?</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
