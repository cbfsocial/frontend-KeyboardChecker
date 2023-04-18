import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Link to={"/keycodes"}>
        <span className="home-text"> Keycodes </span>
      </Link>
      <Link to={"/mousechecker"}>
        <span className="home-text">Double click checker</span>
      </Link>

      <Link to={"/keyboardchecker"}>
        <span className="home-text">Keyboard checker</span>
      </Link>
    </div>
  );
}
