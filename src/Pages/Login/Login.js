import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    user,
    signInWithGoogle,
    signInWithEmailPass,
    setUser,
    setError,
    error,
    setName,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  //sign in using email pass

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailPass()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //sign in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
        setName(result.user.displayName);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="lg:w-2/5 md:w-2/4 w-4/5 mx-auto shadow-lg rounded px-8 py-12 my-16">
      <h1 className="text-2xl font-bold text-center mb-8">Please Login!</h1>
      <div className="lg:w-4/5 w-11/12 mx-auto">
        <form className=" mx-auto" onSubmit={handleSubmit}>
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
          <p className="text-red-600">{error}</p>
          <button className="py-2 px-3 rounded button text-white">
            Sign In
          </button>
        </form>
        <Link to="/register">
          <h1 className="text-purple-500 my-2">Need to Create an Account?</h1>
        </Link>
        <h1 className="text-xl mb-2">---- OR ----</h1>
        <button
          className="py-2 px-3 rounded button-2"
          onClick={handleGoogleSignIn}
        >
          <i className="fab fa-google mr-3"></i>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
