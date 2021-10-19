import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/initialize-firebase";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //sign in using google
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  ///register using email pass
  const signUpWithEmailPass = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        result.user && setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //sign in with email pass
  const signInWithEmailPass = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const updateInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        //updated
        //
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    name,
    pass,
    email,
    signInWithGoogle,
    logOut,
    setUser,
    setError,
    signUpWithEmailPass,
    setName,
    setEmail,
    setPass,
    signInWithEmailPass,
    updateInfo,
    isLoading,
    setIsLoading,
  };
};
export default useFirebase;
