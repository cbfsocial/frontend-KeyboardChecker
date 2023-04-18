export default function Key({
  keyName,
  pressedKey,
  keyCode,
  altKey,
  className,
  id,
}) {
  const isChecked = pressedKey.includes(Number(keyCode)) ? " checked-key" : "";
  return (
    <div className={"key " + className + isChecked} key={id}>
      {altKey} <span>{keyName}</span>
    </div>
  );
}
