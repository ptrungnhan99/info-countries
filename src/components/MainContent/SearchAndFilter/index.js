import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
export default function SearchAndFilter(props) {
    return (
        <SearchAndFilterPane>
            <Search />
            <Filter />
        </SearchAndFilterPane>
    );
}
const SearchAndFilterPane = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
