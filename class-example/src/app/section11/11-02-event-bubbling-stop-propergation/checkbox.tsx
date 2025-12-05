export default function Checkbox() {
  const onClick2 = (evnet) => {
    event?.stopPropagation();
    alert("2번클릭");
  };
  const onClick3 = (evnet) => {
    alert("3번클릭");
  };
  return (
    <span onClick={onClick2}>
      <input type="checkbox" onClick={onClick3} />
    </span>
  );
}
