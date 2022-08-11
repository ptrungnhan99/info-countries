import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import CountryInfo from "./CountryInfo";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../store/Action/countriesAction";
import { useSelector } from "react-redux";
import Loading from "../../Loading";
function CountryDetail(props) {
    const themeContext = useContext(ThemeContext);
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const country = useSelector((state) => state.Countries.country);
    const loading = useSelector((state) => state.Countries.loading);

    useEffect(() => {
        dispatch(getCountryByName(slug.countryName));
    }, [slug.countryName, dispatch]);

    return (
        <Wrapper>
            <div
                onClick={() => navigate(-1)}
                className={`${themeContext.theme} btn-go-back`}
            >
                Go Back
            </div>
            {loading ? (
                <Loading />
            ) : (
                <CountryContainer>
                    <div className="flag-country">
                        <img
                            src={
                                country
                                    ? country.flag
                                    : "https://via.placeholder.com/300x200?text=Image+Error"
                            }
                            alt=""
                        />
                    </div>
                    <CountryInfo />
                </CountryContainer>
            )}
        </Wrapper>
    );
}
export default CountryDetail;
const Wrapper = styled.div`
    padding-top: 20px;
    .btn-go-back {
        display: block;
        width: 80px;
        height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all 0.2s linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            cursor: default;
            user-select: none;
        }
    }
`;
const CountryContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
    .flag-country {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--BoxShadow);
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
`;
