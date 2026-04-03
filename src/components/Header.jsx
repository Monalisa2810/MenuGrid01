import panda from "./panda.png";
import penguin from "./penguin.PNG";
import bear from "./bear.png";

export default function Header({ menuType, setMenuType }) {
  return (
    <div className="header">

      <div 
        className={`header-item ${menuType === "veg" ? "active" : ""}`}
        onClick={() => setMenuType("veg")}
      >
        <img src={panda} alt="veg" />
        <span>Veg</span>
      </div>

      <div 
        className={`header-item ${menuType === "nonveg" ? "active" : ""}`}
        onClick={() => setMenuType("nonveg")}
      >
        <img src={penguin} alt="nonveg" />
        <span>Non-Veg</span>
      </div>

      <div 
        className={`header-item ${menuType === "special" ? "active" : ""}`}
        onClick={() => setMenuType("special")}
      >
        <img src={bear} alt="special" />
        <span>Special</span>
      </div>

      <div 
        className={`header-item ${menuType === "foodpark" ? "active" : ""}`}
        onClick={() => setMenuType("foodpark")}
      >
        🍽️
        <span>Food Park</span>
      </div>

    </div>
  );
}