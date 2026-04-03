const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export default function MenuGrid({ menu }) {
  return (
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
              <td key={day}>
                {menu?.[day]?.[meal] || "—"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}