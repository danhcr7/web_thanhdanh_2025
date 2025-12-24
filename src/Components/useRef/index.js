import { useRef, useState, useEffect } from "react";
import "./index.css";
function UseRef() {
    const [value, setValue] = useState();
    const [value_textBox, setValue_textBox] = useState();
  let obj = useRef(0);
  function handleChange(event) {
        setValue(event.target.value);
        obj.current = obj.current + 1;
  }
  function handleClick() {
        setValue(value);
        setValue_textBox(`Số lần bị Render lại là: ${obj.current}`);
  }
   function handleClick1() {
        setValue("");
        setValue_textBox("");
  }
  return (
    <>
      <div className="Container">
        <input type="text" value = {value} onChange={handleChange} />
        <div className="khoi-btn">
            <button onClick={handleClick}>Click</button>
            <button onClick={handleClick1}>Xóa</button>
        </div>
        <div className="demSoLanRenderLai" >
            {value_textBox}
        </div>
      </div>
    </>
  );
}
export default UseRef;
