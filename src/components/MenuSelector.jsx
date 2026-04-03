export default function MenuSelector({ selected, setSelected }) {
  const types = ["Non-Veg", "Veg", "Special", "Food Park"];

  return (
    <div className="menu-selector">
      {types.map((type) => (
        <button
          key={type}
          className={selected === type ? "active-btn" : ""}
          onClick={() => setSelected(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}