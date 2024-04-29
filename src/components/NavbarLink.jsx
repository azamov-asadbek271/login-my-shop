import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    text: "Create",
    link: "/create",
  },
];
function NavbarLink() {
  return (
    <div>
   {links.map((link) =>{
   return (
     <Link
       key={link.id}
       to={link.link}
       className="px-4 py-2   hover:bg-base-content hover:text-white rounded lg:inline flex"
     >
      
       {link.text}
     </Link>
   );
   })}
    </div>
  )
}

export default NavbarLink