import { createContext, useReducer } from "react";
 
export const GlobalContect = createContext()

const changeState = (state,action) => {
   switch (action.type) {
     case "CHANGE_NAVBAR_BG":
       return { ...state, navbarColor: action.payload };
     case "SIGN_IN":
       return { ...state, user: action.payload };
      case "AUTH_CHANGE":
        return {...state,authChange:true}
     default:
       return state;
   }
}
export function GlobalContextProdive ({children}) {
    const [state, dispatch] = useReducer(changeState, {
      user: null,
      navbarColor: "bg-base-300",
      authChange: false,
    });
  

    return (
      <GlobalContect.Provider value={{ ...state,dispatch}}>
        {children}
      </GlobalContect.Provider>
    );
}