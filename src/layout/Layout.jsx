import { Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import ThimsContainer from "../components/pages/ThimsContainer";
function Layout() {
  return (
    <>
      <Navbar />
      <ThimsContainer/>
      <main className="aligin-container ">
        <Outlet />
      </main>
    </>
  );
}

export default Layout