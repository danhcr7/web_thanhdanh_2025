import { useState, useRef, useEffect } from "react";
import "./random.css";
function Random() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    async function getData() {
      let obj_json = await fetch(
        "https://mocki.io/v1/351c5225-c469-40d5-8a0e-3f29294469b5"
      );
      let obj_javascript = await obj_json.json();
      setData(obj_javascript);
    }
    getData();
  }, []);
  function rdfw() {
    let text = "";
    for (let item of data) {
        text += `\nName: ${item.ten}; Giá: ${item.gia} \n`;
    }
    setResult(text);
  }
  return (
    <>
      <div className="random-box">
        <div className="header">
          <div className="title">VUI HỘI VUI XUÂN 2026</div>
        </div>
        <div className="content">
          <div className="btn_random">
            <button className="rd" onClick={rdfw}>
              Show quà
            </button>
          </div>
          <div className="sestion-kq">{result}</div>
        </div>
        <div className="nutbam">
          <div className="LienHe">
            <button>Liên hệ</button>
          </div>
          <div className="Xoa">
            <button>Xóa</button>
          </div>
          <div className="Quytacchoi">
            <button>Quy tắc chơi</button>
          </div>
          <div className="Giới thiệu">
            <button>Giới thiệu</button>
          </div>
          <div className="Cách nhận quà">
            <button>Cách nhận quà</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Random;
