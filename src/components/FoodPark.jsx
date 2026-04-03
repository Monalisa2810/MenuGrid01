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

export default function FoodPark() {
  return (
    <div className="foodpark-container">
      {Object.entries(foodParkMenu).map(([category, items]) => (
        <div className="gradient-border" key={category}>
          <div className="glass food-card">

            <h2>{category.toUpperCase()}</h2>

            {items.map((item, i) => (
              <div className="food-item" key={i}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}