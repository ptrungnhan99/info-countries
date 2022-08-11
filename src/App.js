import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import styled from "styled-components";
import { ThemeContext } from "./components/ThemeContext/themeContext";
import { useContext } from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    //Link,
} from "react-router-dom";
import CountryDetail from "./components/MainContent/CountryDetail";
function App() {
    const themeContext = useContext(ThemeContext);
    return (
        <AppContainer className={themeContext.theme}>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<MainContent />} />
                        <Route
                            path="/region/:regionName"
                            element={<MainContent />}
                        />
                        <Route
                            path="/country/:countryName"
                            element={<CountryDetail />}
                        />
                        <Route path="/search/:name" element={<MainContent />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </AppContainer>
    );
}

export default App;
const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;
const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 12px;
`;
