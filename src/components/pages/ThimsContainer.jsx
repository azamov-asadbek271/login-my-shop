import { useEffect } from "react";
import { useState } from "react";
import { FaMoon,FaSun  } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContect } from "../../context/useGlobalContext";
const themes= {
    winter:"winter",
    dracula: "dracula"
}
const colors = ["#ED9455", "#948979", "#FB9AD1"];

function darkModeForm () {
    return localStorage.getItem("mode") || themes.winter
}
function ThimsContainer() {
  const {dispatch} = useContext(GlobalContect)
  const changeColor = (color) => {
   return dispatch({
     type: "CHANGE_NAVBAR_BG",
     payload: color
   });
  }
    const [theme, setTheme] = useState(darkModeForm);
    function handleClick () {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme)
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem("mode", theme);
   
    },[theme])
  return (
    <div className="mb-10 py-3 ">
      <div className="aligin-container flex justify-between">
        {/* color */}
        <div className="flex flex-grow gap-2">
          {colors.map((color) => {
            return (
              <div
              onClick={() => changeColor(color)}
                key={color}
                className="h-7 w-7 cursor-pointer rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        {/* Tema */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={handleClick}
           defaultChecked={theme == "winter" ? false : true}/>

          {/* sun icon */}
          <FaSun className="swap-on fill-current w-7 h-7" />
          {/* moon icon */}
          <FaMoon className="swap-off fill-current w-7 h-7" />
        </label>
      </div>
    </div>
  );
}

export default ThimsContainer;
