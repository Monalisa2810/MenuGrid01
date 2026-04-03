import { useState } from "react";
import vegMenu from "../data/vegMenu";
import nonVegMenu from "../data/nonVegMenu";
import specialMenu from "../data/specialMenu";
import Header from "../components/Header";

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// 🔥 FOOD PARK DATA (from your image)
const foodParkMenu = {
  grill: [
    { name: "Phulka", price: 19 },
    { name: "Butter Phulka", price: 21 },
    { name: "Plain Naan", price: 20 },
    { name: "Butter Naan", price: 27 },
    { name: "Plain Roti", price: 20 },
    { name: "Butter Roti", price: 27 },
    { name: "Tandoori Chicken", price: 117 },
    { name: "Chicken Tikka", price: 117 },
  ],

  veg: [
    { name: "Veg Fried Rice", price: 65 },
    { name: "Neem Fried Rice", price: 77 },
    { name: "Paneer Butter Masala", price: 77 },
    { name: "Aloo Bhindi", price: 70 },
    { name: "Gobi 65", price: 70 },
  ],

  nonveg: [
    { name: "Chicken Fried Rice", price: 101 },
    { name: "Egg Fried Rice", price: 70 },
    { name: "Chicken Do Pyaza", price: 112 },
    { name: "Chicken Sukka", price: 112 },
    { name: "Chicken 65", price: 105 },
  ],

  fruiteria: [
    { name: "Grape", price: 47 },
    { name: "Muskmelon", price: 47 },
    { name: "Sweet Lime", price: 53 },
    { name: "Pista Milkshake", price: 77 },
  ],

  tawaz: [
    { name: "Veg Biryani", price: 68 },
    { name: "Hyderabadi Chicken Biryani", price: 117 },
    { name: "Curd", price: 14 },
    { name: "Plain Rice", price: 35 },
    { name: "South Indian Meals", price: 65 },
  ]
};

export default function Mess() {
  const [type, setType] = useState("veg");

  const getMenu = () => {
    if (type === "veg") return vegMenu;
    if (type === "nonveg") return nonVegMenu;
    if (type === "special") return specialMenu;
    return null;
  };

  const currentMenu = getMenu();

  return (
    <div className="mess-page">

      <h1 className="title">Mess Menu</h1>

      {/* 🔥 TOGGLE */}
      
      <div className="menu-selector">
        <button className={type==="veg"?"active-btn":""} onClick={()=>setType("veg")}>Veg</button>
        <button className={type==="nonveg"?"active-btn":""} onClick={()=>setType("nonveg")}>Non-Veg</button>
        <button className={type==="special"?"active-btn":""} onClick={()=>setType("special")}>Special</button>
        <button className={type==="foodpark"?"active-btn":""} onClick={()=>setType("foodpark")}>Food Park</button>
      </div>

      {/* ✅ TABLE VIEW (for mess types) */}
      {type !== "foodpark" && (
        <div className="menu-container">
          <table className="menu-table">
            <thead>
              <tr>
                <th>Meal / Day</th>
                {days.map(day => <th key={day}>{day}</th>)}
              </tr>
            </thead>

            <tbody>
              {["breakfast","lunch","snacks","dinner"].map(meal => (
                <tr key={meal}>
                  <td className="meal">{meal.toUpperCase()}</td>
                  {days.map(day => (
                    <td key={day}>{currentMenu[day][meal]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔥 FOOD PARK VIEW */}
      {type === "foodpark" && (
        <div className="foodpark-container">
          {Object.entries(foodParkMenu).map(([category, items]) => (
            <div className="food-card" key={category}>
              <h2>{category.toUpperCase()}</h2>

              {items.map((item, index) => (
                <div className="food-item" key={index}>
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}