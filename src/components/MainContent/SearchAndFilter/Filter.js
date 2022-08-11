import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import Options from "./Options/Options";
import { FaAngleDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
export default function Filter(props) {
    const themeContext = useContext(ThemeContext);
    const refSelect = useRef(null);
    const [isShowOption, setIsShowOption] = useState(false);
    const { regionName } = useParams();
    const [valueOption, setValueOption] = useState("All");
    const handleOptions = (e) => {
        if (refSelect.current) {
            setIsShowOption(refSelect.current.contains(e.target));
            //console.log(refSelect.current.contains(e.target));
        }
    };
    useEffect(() => {
        if (regionName) {
            setValueOption(regionName);
        } else {
            setValueOption("All");
        }
    }, [regionName]);
    useEffect(() => {
        if (isShowOption) {
            document.addEventListener("click", handleOptions);
            return () => {
                document.removeEventListener("click", handleOptions);
            };
        }
    }, [isShowOption]);
    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select
                    className={themeContext.theme}
                    ref={refSelect}
                    onClick={handleOptions}
                >
                    <span>{valueOption}</span>
                    <FaAngleDown />
                </Select>
                <Options isShowOption={isShowOption} />
            </SelectPane>
        </FilterPane>
    );
}
const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;
    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--Text-Shadow);
    }
    @media screen and (max-width: 767px) {
        max-width: 100%;
    }
`;
const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
`;
const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;
    span {
        font-size: 18px;
        font-weight: bold;
    }
`;
