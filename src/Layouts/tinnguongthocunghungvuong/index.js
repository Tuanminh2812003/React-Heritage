import "../../Components/LayoutDefault.scss"

import Footer from "./Footer";
import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section1p2 from "./Section1p2";
import Section1p5 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section5p2 from "./Section5p2";
import Section5p3 from "./Section5p3";
import Section7 from "./Section7";

function TNTM(){
    return(
        <>
            <div className="blueMode">
                <SectionMain/>
                <Section5/>
                <Section5p2/>
                <Section1/>
                <Section1p5/>
                <Section5p3/>
                <div className="container">
                    <Section4/>
                </div>
                <Section7/>
                <Footer/>
            </div>
        </>
    )
}

export default TNTM;