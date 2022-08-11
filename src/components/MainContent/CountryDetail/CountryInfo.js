import { useContext, useEffect, useState } from "react";
import styled from "./countryInfoStyle.module.scss";
import { ThemeContext } from "../../ThemeContext/themeContext";
import clsx from "clsx";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollBar from "react-perfect-scrollbar";
const getLanguages = (country) => {
    let result = "";
    country.languages.forEach((language) => {
        if (result !== "") {
            result = result + "-" + language.name;
        } else {
            result += language.name;
        }
    });
    return result;
};
function CountryInfo(props) {
    const themeContext = useContext(ThemeContext);
    const country = useSelector((state) => state.Countries.country);
    const [countriesBorder, setCountrieBorder] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        const getCountryNameByCode = async () => {
            try {
                const response = await axios.get(
                    `https://restcountries.com/v2/alpha?codes=${country.borders}`,
                    //cancel quest
                    { signal: controller.signal }
                );
                const countryName = response.data.map(
                    (country) => country.name
                );
                setCountrieBorder(countryName);
            } catch (err) {
                console.log("There was a problem or request was cancelled.");
            }
        };
        if (country && country.borders) {
            getCountryNameByCode();
        }
        return () => {
            //Cancel Request;
            controller.abort();
        };
    }, [country]);
    return (
        <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
            <div className={styled.countryInfo}>
                {country && (
                    <>
                        <h4 className={styled.countryName}>{country.name}</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Native Name
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.nativeName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Official
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.altSpellings}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Population
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {new Intl.NumberFormat().format(
                                            country.population
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>Region</td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.region}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Sub Region
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.subregion}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Capital
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.capital}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}></td>
                                    <td></td>
                                    <td className="valueInfo"></td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Top Level Domain
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.topLevelDomain[0]}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Currencies
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {country.currencies[0].code} -
                                        {country.currencies[0].name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Languages
                                    </td>
                                    <td>:</td>
                                    <td className="valueInfo">
                                        {getLanguages(country)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}></td>
                                    <td></td>
                                    <td className="valueInfo"></td>
                                </tr>
                                <tr>
                                    <td className={styled.titleInfo}>
                                        Border Countries
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <div className={styled.borderList}>
                                            {countriesBorder.length > 0 &&
                                                countriesBorder.map(
                                                    (country, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/country/${country}`}
                                                        >
                                                            <div
                                                                className={clsx(
                                                                    styled.borderItem,
                                                                    themeContext.theme
                                                                )}
                                                            >
                                                                {country}
                                                            </div>
                                                        </Link>
                                                    )
                                                )}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </ScrollBar>
    );
}
export default CountryInfo;
