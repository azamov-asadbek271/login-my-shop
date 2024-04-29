import { Navigate } from "react-router-dom"
function ProtecdRouter({children,user}) {
   if(user) {
    return children
   } else {
     return   <Navigate to="/signin"/>
   }
}

export default ProtecdRouter