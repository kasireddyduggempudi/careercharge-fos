import AboutUs from "../../components/aboutus/AboutUs";
import Header from "../../components/header/Header";
import './AboutUsView.css';

function AboutUsView() {
    return (
        <>
            <Header />
            <div className="aboutUsContainer">
                <AboutUs />
            </div>
        </>
    );
}

export default AboutUsView;