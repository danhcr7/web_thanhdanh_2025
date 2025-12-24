import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import UseRef from "./Components/useRef";
import Random from "./Components/Random";
import { createContext } from "react";
export const Acontext = createContext();
function App() {
  return (
    <>
        <Random />
    </>
  );
}

export default App;
