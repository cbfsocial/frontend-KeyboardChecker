import Header from "./Header";
import { useEffect, useState, useRef } from "react";
import useDoubleClick from "use-double-click";

export default function MouseChecker() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [doubleClick, setDoubleClick] = useState(false);
  const [doubleClickCounter, setDoubleClickCounter] = useState(0);

  function handleDoubleClick(e) {
    setDoubleClick(true);
    setDoubleClickCounter((prev) => prev + 1);
  }
  const Checker = () => {
    const divRef = useRef();
    useDoubleClick({
      onSingleClick: (e) => null,
      onDoubleClick: (e) => handleDoubleClick(e),
      ref: divRef,
      latency: 90,
    });

    return (
      <div
        className={doubleClick ? "checkbox doubleclick" : "checkbox"}
        ref={divRef}
      ></div>
    );
  };
  return (
    <>
      <Header />
      <div className="checkbox-wrapper ">
        <Checker />
        {doubleClick ? (
          <p className="doubleclick-warning">Double click detected</p>
        ) : (
          ""
        )}
        <div className="doubleclick-counter">
          <p>Double click counter:{doubleClickCounter}</p>
        </div>
      </div>
    </>
  );
}
