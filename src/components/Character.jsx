import panda from "../components/panda.png";
import penguin from "../components/penguin.PNG";
import bear from "../components/bear.png";

export default function Character({ type }) {

  let img = null;

  if (type === "veg") img = panda;
  if (type === "nonveg") img = penguin;
  if (type === "special") img = bear;

  if (!img) return null;

  return (
    <div className="character">
      <img src={img} alt="character" />
    </div>
  );
}