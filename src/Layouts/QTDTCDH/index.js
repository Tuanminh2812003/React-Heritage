import "../../Components/LayoutDefault.scss";

import SectionMain from "../../Components/SectionMain";
import Section1 from "../../Components/Section1";
import Section1p2 from "./Section1p2";
import Section2 from "../../Components/Section2";
import Section4 from "../../Components/Section4";
import Section5 from "../../Components/Section5";
import Section5p2 from "./Section5p2";
import Section5p3 from "./Section5p3";
import Section6 from "../../Components/Section6";
import Section7 from "../../Components/Section7";
import Footer from "./Footer";
import Button from "../../Components/Button";

function LayoutDefault(){
    return(
        <>
            <div className="redMode">
                <SectionMain/>
                <Section1 />
                <Section5 />
                <Section2 />
                <Section1p2 />
                <Section5p2 />
                <Section5p3 />
                <Section7 />
                <div className="container" style={{backgroundColor: "white"}}>
                    <a href="/"style={{display: "flex", width: "100%", justifyContent:"center", margin:"24px"}}>
                        <Button/>
                    </a>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default LayoutDefault;