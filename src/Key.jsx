export default function Key({
  keyName,
  pressedKey,
  keyCode,
  altKey,
  className,
  activeKey,
}) {
  const isChecked = pressedKey.includes(Number(keyCode)) ? " checked-key" : "";
  const isActive = activeKey === Number(keyCode) ? " active-key" : "";
  return (
    <div className={"key " + className + isChecked + isActive}>
      {altKey} <span>{keyName}</span>
    </div>
  );
}
