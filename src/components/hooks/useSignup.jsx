import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { GlobalContect } from "../../context/useGlobalContext";
function useSignup() {
    const {dispatch} =  useContext(GlobalContect)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);
    const singupWithGoggle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          dispatch({
            type:"SIGN_IN",
            payload: user
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          setError(errorMessage);
        });

    };
     const userPassword = (email, password, name, photo) => {
       createUserWithEmailAndPassword(auth, email, password)
         .then(async (userCredential) => {
           await updateProfile(auth.currentUser, {
             displayName: name,
             photoURL: photo,
           });
           const user = userCredential.user;
           dispatch({
             type: "SIGN_IN",
             payload: user,
           });
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setError(errorMessage);
         });
     };
  return { singupWithGoggle,userPassword, user, error };
}

export  {useSignup};
