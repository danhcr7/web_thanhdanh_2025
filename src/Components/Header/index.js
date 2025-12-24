import { useContext } from "react";
import { Acontext } from "../../App";
function Header(props) {
    let data = useContext(Acontext);
    return (
        <>
           <p>{data}</p>
        </>
    )
}
export default Header;