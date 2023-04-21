import Header from "./Header";
import * as Icon from "react-feather";
import Key from "./Key";
import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
export default function Keyboard() {
  const [pressedKey, setPressedKey] = useState([]);
  const [activeKey, setActiveKey] = useState("");

  const mainDiv = useRef(null);

  useEffect(() => {
    if (mainDiv.current) {
      mainDiv.current.focus();
    }
  }, []);

  function handleKeyDown(event) {
    event.preventDefault();
    setActiveKey(event.keyCode);
    setPressedKey((prev) => {
      if ([...prev].find((el) => Number(el) === event.keyCode)) {
        return [...prev];
      } else {
        return [...prev, event.keyCode];
      }
    });
    console.log(pressedKey);
  }

  function handleKeyUp() {
    setActiveKey("");
  }
  const keysRow1 = [
    {
      keyName: <Icon.X />,
      altKey: "",
      className: "key-esc",
      id: nanoid(),
      keyCode: "27",
    },
    {
      keyName: "1",
      altKey: "!",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "49",
    },
    {
      keyName: "2",
      altKey: "@",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "50",
    },
    {
      keyName: "3",
      altKey: "#",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "51",
    },
    {
      keyName: "4",
      altKey: "$",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "52",
    },
    {
      keyName: "5",
      altKey: "%",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "53",
    },
    {
      keyName: "6",
      altKey: "^",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "54",
    },
    {
      keyName: "7",
      altKey: "&",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "55",
    },
    {
      keyName: "8",
      altKey: "*",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "56",
    },
    {
      keyName: "9",
      altKey: "(",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "57",
    },
    {
      keyName: "0",
      altKey: ")",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "48",
    },
    {
      keyName: "-",
      altKey: "_",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "189",
    },
    {
      keyName: "=",
      altKey: "+",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "187",
    },
    {
      keyName: <Icon.Delete />,
      altKey: "",
      className: "key-delete",
      id: nanoid(),
      keyCode: "8",
    },
  ];

  const keysRow2 = [
    {
      keyName: <Icon.LogIn />,
      altKey: "",
      className: "key-oneandhalf",
      id: nanoid(),
      keyCode: "9",
    },
    { keyName: "Q", altKey: "", id: nanoid(), keyCode: "81" },
    { keyName: "W", altKey: "", id: nanoid(), keyCode: "87" },
    { keyName: "E", altKey: "", id: nanoid(), keyCode: "69" },
    { keyName: "R", altKey: "", id: nanoid(), keyCode: "82" },
    { keyName: "T", altKey: "", id: nanoid(), keyCode: "84" },
    { keyName: "Y", altKey: "", id: nanoid(), keyCode: "89" },
    { keyName: "U", altKey: "", id: nanoid(), keyCode: "85" },
    { keyName: "I", altKey: "", id: nanoid(), keyCode: "73" },
    { keyName: "O", altKey: "", id: nanoid(), keyCode: "79" },
    { keyName: "P", altKey: "", id: nanoid(), keyCode: "80" },
    {
      keyName: "[",
      altKey: "{",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "219",
    },
    {
      keyName: "]",
      altKey: "}",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "221",
    },
    {
      keyName: `\\`,
      altKey: "|",
      className: "key-oneandhalf key-symbols",
      id: nanoid(),
      keyCode: "220",
    },
  ];
  const keysRow3 = [
    {
      keyName: <Icon.Upload />,
      altKey: "",
      className: "key-caps",
      id: nanoid(),
      keyCode: "20",
    },
    { keyName: "A", altKey: "", id: nanoid(), keyCode: "65" },
    { keyName: "S", altKey: "", id: nanoid(), keyCode: "83" },
    { keyName: "D", altKey: "", id: nanoid(), keyCode: "68" },
    { keyName: "F", altKey: "", id: nanoid(), keyCode: "70" },
    { keyName: "G", altKey: "", id: nanoid(), keyCode: "71" },
    { keyName: "H", altKey: "", id: nanoid(), keyCode: "72" },
    { keyName: "J", altKey: "", id: nanoid(), keyCode: "74" },
    { keyName: "K", altKey: "", id: nanoid(), keyCode: "75" },
    { keyName: "L", altKey: "", id: nanoid(), keyCode: "76" },
    {
      keyName: ";",
      altKey: ":",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "186",
    },
    {
      keyName: "'",
      altKey: `"`,
      id: nanoid(),
      className: "key-symbols",
      keyCode: "222",
    },
    {
      keyName: <Icon.CornerDownLeft />,
      altKey: "",
      className: "key-enter",
      id: nanoid(),
      keyCode: "13",
    },
  ];

  const keysRow4 = [
    {
      keyName: <Icon.ChevronUp />,
      altKey: "",
      className: "key-caps, key-shift-left",
      id: nanoid(),
      keyCode: "16",
    },
    { keyName: "Z", altKey: "", id: nanoid(), keyCode: "90" },
    { keyName: "X", altKey: "", id: nanoid(), keyCode: "88" },
    { keyName: "C", altKey: "", id: nanoid(), keyCode: "67" },
    { keyName: "V", altKey: "", id: nanoid(), keyCode: "86" },
    { keyName: "B", altKey: "", id: nanoid(), keyCode: "66" },
    { keyName: "N", altKey: "", id: nanoid(), keyCode: "78" },
    { keyName: "M", altKey: "", id: nanoid(), keyCode: "77" },
    {
      keyName: ",",
      altKey: "<",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "188",
    },
    {
      keyName: ".",
      altKey: ">",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "190",
    },
    {
      keyName: "/",
      altKey: "?",
      id: nanoid(),
      className: "key-symbols",
      keyCode: "191",
    },
    {
      keyName: <Icon.ChevronUp />,
      altKey: "",
      id: nanoid(),
      className: "",
      keyCode: "16",
    },
    {
      keyName: <Icon.ArrowUp />,
      altKey: ``,
      id: nanoid(),
      className: "key-arrow",
      keyCode: "38",
    },
    {
      keyName: <Icon.Trash2 />,
      altKey: "",
      className: "",
      id: nanoid(),
      keyCode: "46",
    },
  ];
  const keysRow5 = [
    {
      keyName: <Icon.Settings />,
      altKey: "",
      className: "key-bottom-funct",
      id: nanoid(),
      keyCode: "17",
    },
    {
      keyName: <Icon.Activity />,
      altKey: "",
      className: "key-bottom-funct",
      id: nanoid(),
      keyCode: "91",
    },
    {
      keyName: <Icon.Terminal />,
      altKey: "",
      id: nanoid(),
      className: "key-bottom-funct",
      keyCode: "18",
    },
    {
      keyName: "",
      altKey: "",
      id: nanoid(),
      className: "key-spacebar",
      keyCode: "32",
    },
    {
      keyName: <Icon.Terminal />,
      altKey: "",
      id: nanoid(),
      className: "",
      keyCode: "18",
    },
    {
      keyName: <Icon.Activity />,
      altKey: "",
      id: nanoid(),
      className: "",
      keyCode: "92",
    },
    {
      keyName: <Icon.ArrowLeft />,
      altKey: "",
      id: nanoid(),
      className: "key-arrow",
      keyCode: "37",
    },
    {
      keyName: <Icon.ArrowDown />,
      altKey: ``,
      id: nanoid(),
      className: "key-arrow",
      keyCode: "40",
    },
    {
      keyName: <Icon.ArrowRight />,
      altKey: "",
      className: "key-arrow",
      keyCode: "39",
      id: nanoid(),
    },
  ];
  return (
    <div
      className="page-wrapper"
      onKeyDown={(e) => handleKeyDown(e)}
      onKeyUp={() => handleKeyUp()}
      ref={mainDiv}
      tabIndex={0}
    >
      <Header />
      <div className="keyboard-page">
        <div className="keyboard">
          <div className="row">
            {keysRow1.map((el) => (
              <Key
                keyName={el.keyName}
                altKey={el.altKey}
                className={el.className}
                key={el.id}
                keyCode={el.keyCode}
                pressedKey={pressedKey}
                activeKey={activeKey}
              />
            ))}
          </div>

          <div className="row">
            {keysRow2.map((el) => (
              <Key
                keyName={el.keyName}
                altKey={el.altKey}
                className={el.className}
                key={el.id}
                keyCode={el.keyCode}
                pressedKey={pressedKey}
                activeKey={activeKey}
              />
            ))}
          </div>

          <div className="row">
            {keysRow3.map((el) => (
              <Key
                keyName={el.keyName}
                altKey={el.altKey}
                className={el.className}
                key={el.id}
                keyCode={el.keyCode}
                pressedKey={pressedKey}
                activeKey={activeKey}
              />
            ))}
          </div>

          <div className="row">
            {keysRow4.map((el) => (
              <Key
                keyName={el.keyName}
                altKey={el.altKey}
                className={el.className}
                key={el.id}
                keyCode={el.keyCode}
                pressedKey={pressedKey}
                activeKey={activeKey}
              />
            ))}
          </div>

          <div className="row">
            {keysRow5.map((el) => (
              <Key
                keyName={el.keyName}
                altKey={el.altKey}
                className={el.className}
                key={el.id}
                keyCode={el.keyCode}
                pressedKey={pressedKey}
                activeKey={activeKey}
              />
            ))}
          </div>
        </div>
      </div>
      <div onClick={() => setPressedKey([])} className="reset-button">
        RESET
      </div>
    </div>
  );
}
