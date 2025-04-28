import "../../Components/LayoutDefault.scss";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section1p2 from "./Section1p2";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section5p2 from "./Section5p2";
import Section5p3 from "./Section5p3";
import Section7 from "./Section7";
import Footer from "./Footer";
import Button from "../../Components/Button";

function LayoutDefault(){
    return(
        <>
            <div className="greenMode">
                <SectionMain/>
                <Section1/>
                <Section5/>
                <Section5p2/>
                <Section1p2/>
                <Section2/>
                <Section5p3/>
                <div className="container infographic" style={{backgroundColor:"#D4E0BD"}}>
                    <img src="/image/vinhhalong/infographic web-02.jpg" style={{width: "100%", height: "auto"}}/>
                </div>
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