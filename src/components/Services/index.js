import { FaVolleyballBall,FaFileAlt, } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { LuMonitorPlay } from "react-icons/lu";
import { FaToriiGate } from "react-icons/fa";
import { Link } from "react-scroll";
import { Zoom } from "react-awesome-reveal";

export const Services = () =>
{
    return(
        <section id="services">
        <div className="services-start-gap">
            <div className="container">
                <Zoom triggerOnce duration={1500} delay={1200}>
                <div className="services-title-card">
                    <span className="services-title">SERVICES</span>
                    <h3 className="services-title-card-head">Our Awesome<span className="services-title-head-span"> Services</span></h3>
                    <p className="services-title-card-para">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                </Zoom>
                <Servicescard/>        
            </div>
        </div>
        </section>
    )
}
const Servicescard = () =>
{
    return(
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><FaVolleyballBall /></div>
                        <h4 className="services-cardbox-head">Lorem Ipsum</h4>
                        <p className="services-cardbox-para">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                    </Zoom>
                </div>
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><FaFileAlt/></div>
                        <h4 className="services-cardbox-head">Sed ut perspiciatis</h4>
                        <p className="services-cardbox-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    </Zoom>
                </div>
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><MdOutlineSpeed /></div>
                        <h4 className="services-cardbox-head">Magni Dolores</h4>
                        <p className="services-cardbox-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                    </Zoom>
                </div>
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><BiWorld /></div>
                        <h4 className="services-cardbox-head">Nemo Enim</h4>
                        <p className="services-cardbox-para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    </Zoom>
                </div>
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><LuMonitorPlay /></div>
                        <h4 className="services-cardbox-head">Dele cardo</h4>
                        <p className="services-cardbox-para">Quis consequatur saepe eligendi voluptatem consequatur dolor</p>
                    </div>
                    </Zoom>
                </div>
                <div className="col-md-4">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-cardbox servicesmainHover">
                        <div className="services-cardbox-icon"><FaToriiGate /></div>
                        <h4 className="services-cardbox-head">Divera don</h4>
                        <p className="services-cardbox-para">Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                    </div>
                    </Zoom>
                </div>  
            </div>
        </div>
    )
}