import { useContext } from "react";
import ModeContext from "./ModeContext";

const ModeSwitcher =()=>{
    const {isDark,Switch} = useContext(ModeContext);
    return(
        <>
            <h1>Switch Mode {isDark?'DARK MODE':'LIGHT MODE'}</h1>
            <button onClick={Switch}>Click</button>
        </>

    )
}
export default ModeSwitcher;