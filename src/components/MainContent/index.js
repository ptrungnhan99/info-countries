import React from "react";
import Countries from "./Countries";
import CountryDetail from "./CountryDetail";
import SearchAndFilter from "./SearchAndFilter";

export default function MainContent(props) {
    return (
        <div>
            <SearchAndFilter />
            <Countries />
        </div>
    );
}
