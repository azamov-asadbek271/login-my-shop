import {signInWithEmailAndPassword,} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { GlobalContect } from "../../context/useGlobalContext";
function useLogin() {
        const { dispatch } = useContext(GlobalContect);
        const [user, setUser] = useState(null);
        const [error, setError] = useState(null);
    const useLoginOut = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
             dispatch({
               type: "SIGN_IN",
               payload: user,
             });
             setUser(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
  return { useLoginOut, user, error };;
}

export default useLogin;
