import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/keycodes"}>
        <p> Keycodes </p>
      </Link>
      <Link to={"/mousechecker"}>
        <p> Mouse checker </p>
      </Link>
      <Link to={"/keyboardchecker"}>
        <p> Keyboard checker </p>
      </Link>
    </div>
  );
}
