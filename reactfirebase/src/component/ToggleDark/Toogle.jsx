import React from "react";
import "./toogle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../redux/action";
import Cookies from "js-cookie";

const Toogle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.themeReducer);
  console.log({ etse: darkMode });

  const handleToggle = () => {
    dispatch(switchMode());
    console.log({ tes: darkMode });
    Cookies.set("darkMode", darkMode.toString(), { expires: 7 });
  };

  return (
    <div class="toggle">
      <input
        type="checkbox"
        class="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={handleToggle}
      />
      <label for="checkbox" class="checkbox-label">
        <FontAwesomeIcon icon="fa-solid fa-moon" />
        <FontAwesomeIcon icon="fa-solid fa-sun" />

        <span class="ball"></span>
      </label>
    </div>
  );
};

export default Toogle;
