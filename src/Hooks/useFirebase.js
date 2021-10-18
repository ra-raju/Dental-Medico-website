import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();

  //provider
  const googleProvider = new GoogleAuthProvider();

  //registration using email password
  const signUpUsingPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateUserName(name);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // update user
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //  login using password

  const loginUsingPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login using google

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    signUpUsingPassword,
    user,
    signInUsingGoogle,
    error,
    loginUsingPassword,
  };
};

export default useFirebase;
