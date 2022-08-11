import styled from "styled-components";
import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/themeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Header() {
    const themeContext = useContext(ThemeContext);
    return (
        <HeaderPain className={themeContext.theme}>
            <Link to="/">
                <span>Where in the world ?</span>
            </Link>
            <SwitchMode />
        </HeaderPain>
    );
}
export default Header;
const HeaderPain = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2), 0 6px 20px 0 rgb(0, 0, 0, 0.2);
    z-index: 10;
    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }
    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        user-select: none;
    }
`;
