import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/themeContext";
import { useContext } from "react";
function Footer() {
    const themeContext = useContext(ThemeContext);
    return (
        <FooterPain className={themeContext.theme}>
            <p>@copyright 2022</p>
            {/* <h1>ssdsđ</h1> */}
        </FooterPain>
    );
}
export default Footer;
const FooterPain = styled.div`
    height: 8vh;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;
