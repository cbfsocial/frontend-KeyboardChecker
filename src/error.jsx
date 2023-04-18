import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="home-wrapper">
      <span className="home-text">404 Page not exist</span>
    </div>
  );
}
