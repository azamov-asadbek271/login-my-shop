import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Page
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// components
import ProtecdRouter from "./components/ProtecdRouter";
import { useContext } from "react";
import { GlobalContect } from "./context/useGlobalContext";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
// action
import { action as useSignubForm } from "./components/pages/Signup";
import { action as useSigninForm } from "./components/pages/Signin";
import { action as useCreateAction } from "./components/pages/Create";
import Create from "./components/pages/Create";
import SingleRecipies from "./components/pages/SingleRecipies";
// loader
import { loader as singleLoader } from "./components/pages/SingleRecipies";


function App() {
  const { user, dispatch, authChange } = useContext(GlobalContect);
 const routes = createBrowserRouter([
   {
     path: "/",
     element: (
       <ProtecdRouter user={user}>
         <Layout />
       </ProtecdRouter>
     ),
     children: [
       {
         index: true,
         element: <Home />,
       },
       {
         path: "/about",
         element: <About />,
       },
       {
         path: "/contact",
         element: <Contact />,
       },
       {
         path: "/create",
         element: <Create />,
         action: useCreateAction,
       },
       {
         path: "/singleRecipies/:id",
         element: <SingleRecipies />,
         loader: singleLoader,
       },
     ],
   },
   {
     path: "/signin",
     element: user ? <Navigate to="/" /> : <Signin />,
     action: useSigninForm,
   },
   {
     path: "/signup",
     element: user ? <Navigate to="/" /> : <Signup />,
     action: useSignubForm,
   },
 ]);
 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  dispatch({
    type: "SIGN_IN",
    payload: user
  });
  dispatch({
    type: "AUTH_CHANGE",
  });
  
  });
 }, []);
  return <>{authChange && <RouterProvider router={routes} />}</>;
}


export default App
