import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="font-bold text-amber-500 text-2xl">
      <Link to="/home">💸 Ace Holdings</Link>
    </div>
  );
}

export default Logo;
