import React, { useContext, useEffect, useRef } from "react";
import { GiEarthAsiaOceania, GiWorld } from "react-icons/gi";
import {
    FaGlobeAfrica,
    FaGlobeAmericas,
    FaGlobeAsia,
    FaGlobeEurope,
} from "react-icons/fa";
import styled from "styled-components";
import Option from "./Option";
import { ThemeContext } from "../../../ThemeContext/themeContext";
const RegionList = [
    { icon: GiWorld, value: "All" },
    { icon: FaGlobeAfrica, value: "Africa" },
    { icon: FaGlobeAmericas, value: "Americas" },
    { icon: FaGlobeAsia, value: "Asia" },
    { icon: FaGlobeEurope, value: "Europe" },
    { icon: GiEarthAsiaOceania, value: "Oceania" },
];
function Options({ isShowOption }) {
    const themeContext = useContext(ThemeContext);
    const refOptions = useRef(null);
    useEffect(() => {
        const ShowOption = () => {
            if (isShowOption) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`;
            } else {
                refOptions.current.style.maxHeight = `0`;
                refOptions.current.style.transform = `scaleY(0)`;
            }
        };
        ShowOption();
        document.addEventListener("resize", ShowOption);
        return () => {
            document.removeEventListener("resize", ShowOption);
        };
    }, [isShowOption]);
    return (
        <OptionPane ref={refOptions} className={`${themeContext.theme}`}>
            {RegionList.map((region) => (
                <Option key={region.value} region={region} />
            ))}
        </OptionPane>
    );
}
export default Options;
const OptionPane = styled.ul`
    width: 100%;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`;
