import { useContext, useEffect, useRef, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import styled from "./SwitchStyles.module.scss";
import { ThemeContext } from "../ThemeContext/themeContext";
function SwitchMode() {
    const themeContext = useContext(ThemeContext);
    const refInput = useRef();
    const refCircle = useRef();
    const refToggle = useRef();
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        refInput.current.checked = isDark;
    }, [isDark]);
    useEffect(() => {
        const changeBackgroundButton = () => {
            if (isDark) {
                refCircle.current.style.background = "#222";
                refToggle.current.style.background = "#fff";
            } else {
                refCircle.current.style.background = "#fff";
                refToggle.current.style.background = "hsl(208, 59%, 41%)";
            }
        };
        changeBackgroundButton();
        document.addEventListener("resize", changeBackgroundButton);
        return () => {
            document.removeEventListener("resize", changeBackgroundButton);
        };
    }, [isDark]);
    function handleToggle() {
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
        themeContext.toggleTheme();
    }
    return (
        <div
            className={styled.toggleButton}
            ref={refToggle}
            onClick={handleToggle}
        >
            <input type="checkbox" className={styled.input} ref={refInput} />
            <div className={styled.icon}>
                {isDark ? <RiMoonFill /> : <RiSunFill />}
            </div>
            <div className={styled.circle} ref={refCircle}></div>
        </div>
    );
}
export default SwitchMode;
