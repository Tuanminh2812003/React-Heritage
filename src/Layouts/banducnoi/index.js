import "../../Components/LayoutDefault.scss";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section1p2 from "./Section1p2"
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Footer from "./Footer";
import Button from "../../Components/Button";

function LayoutDefault(){
    return(
        <>
            <div className="brownMode">
                <SectionMain/>
                <Section1/>
                <Section5/>
                <div className="container">
                    <Section4/>
                </div>
                <div className="container infographic">
                    <img src="/image/banducnoi/5 infomation destop.png" style={{width: "100%", height: "auto"}}/>
                </div>
                <Section2/>
                <Section7/>
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