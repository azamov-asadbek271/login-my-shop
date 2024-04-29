import { useContext } from "react";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { GlobalContect } from "../context/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Navbar() {
    
 const { navbarColor,user } = useContext(GlobalContect);
   function outLogin () {
    signOut(auth)
    .then(() => {
    console.log("xayr")
    }).catch((error) => {console.log(error)})
   }
  return (
    <div
      className="bg-base-300 duration-300 transition"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="navbar aligin-container items-center">
        <div className="navbar-start">
          <Link className="btn btn-primary hidden lg:flex lg:btn-lg" to="/">
            My Kitchen
          </Link>
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-primary lg:btn-lg  m-1 mb-3"
            >
              MyK
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
            >
              <NavbarLink />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavbarLink />
        </div>
        <div className="navbar-end">
          {user && <p className="mr-3 hidden lg:flex">{user.displayName}</p>}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={`${user.displayName ?? "user"}"image"`}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={outLogin} className="btn btn-sm">
                  Logout
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar