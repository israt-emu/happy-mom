import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, signInWithGoogle } = useAuth();
  console.log(user);
  return (
    <div className="lg:w-2/5 md:w-2/4 w-4/5 mx-auto shadow-lg rounded px-8 py-12 my-16">
      <h1 className="text-2xl font-bold text-center mb-8">Please Login!</h1>
      <form className="w-4/5 mx-auto">
        <input
          type="email"
          className="block w-full py-2 px-3 rounded bg-purple-100 mb-4"
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          className="block w-full py-2 px-3 rounded bg-purple-100 mb-4"
          placeholder="Password"
          required
        />
        <button className="py-2 px-3 rounded button text-white">Sign In</button>
      </form>
      <Link to="/register">
        <h1 className="text-purple-500 pl-12 my-2">
          Need to Create an Account?
        </h1>
      </Link>
      <h1 className="text-xl pl-12 mb-2">---- OR ----</h1>
      <button
        className="py-2 px-3 rounded button-2 ml-12"
        onClick={signInWithGoogle}
      >
        <i className="fab fa-google mr-3"></i>
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
