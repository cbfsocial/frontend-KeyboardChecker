import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./Header";

export default function Keycodes() {
  const [key, setKey] = useState();
  const [start, setStart] = useState(false);
  const [history, setHistory] = useState([]);
  const mainDiv = useRef(null);

  useEffect(() => {
    if (mainDiv.current) {
      mainDiv.current.focus();
    }
  }, []);

  function handleKeyDown(e) {
    const event = e;
    setKey(event);
    setStart(true);
    e.preventDefault();
    e.stopPropagation();
    handleHistory(event);
  }

  function handleKeyFromHistory(e) {
    setKey(e);
    e.preventDefault();
    e.stopPropagation();
  }

  function handleHistory(event) {
    setHistory((prev) => {
      if (prev.at(-1)?.keyCode === event.keyCode) {
        return [...prev];
      }
      if (prev.length >= 4) {
        prev = prev.slice(1);
        console.log(prev);
      }
      return [...prev, event];
    });
  }
  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
      className="page-wrapper"
      ref={mainDiv}
    >
      {!start ? (
        <div className="start-message-wrapper">
          <span className="start-message">Press any key to start</span>
        </div>
      ) : (
        <>
          <Header />
          <div className="main-wrapper">
            <div className="key-info-main">
              <p>Key code</p>
              <p className="key-info-main-text">{key.keyCode}</p>
            </div>
            <div className="key-info-wrapper">
              <div className="key-info">
                <p>Code</p>
                <p>{key.nativeEvent.code}</p>
              </div>
              <div className="key-info">
                <p>Key</p>
                <p>{key.keyCode === 32 ? "Space" : key.key}</p>
              </div>
              <div className="key-info">
                <p>Is metakey?</p>
                <p>{JSON.stringify(key.metaKey)}</p>
              </div>
              <div className="key-info">
                <p>Location</p>
                <p>{key.location === 1 ? "left" : "right"}</p>
              </div>
            </div>
            <div className="history-wrapper">
              {history.map((el) => {
                return (
                  <div
                    className="history-key"
                    key={nanoid()}
                    onClick={() => handleKeyFromHistory(el)}
                  >
                    <span>{el.keyCode === 32 ? "Space" : el.key}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
