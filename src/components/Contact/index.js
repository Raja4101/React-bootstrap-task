import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import { Slide,Zoom } from "react-awesome-reveal";

export const Contact = () =>
{
    return(
        <section id="contact">
            <div className="services-start-gap">
            <div className="container">
                <Zoom triggerOnce duration={1500} delay={1200}>
                    <div className="services-title-card">
                        <span className="services-title">CONTACT</span>
                        <h3 className="services-title-card-head">Check our<span className="services-title-head-span"> Contact </span>Details</h3>
                        <p className="services-title-card-para">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div> 
                </Zoom>
                    <Map/>
                    <Address/>
                </div>
            </div>
        </section>
    )
}
const Map = () =>
{
    return(
        <div>
            <div id="map-container-google-2" class="z-depth-1-half map-container-2" style={{height: "300px",width:"100%"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118046!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1705598956485!5m2!1sen!2sus" width="600" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
const Address = () =>
{
    return(
        <div>
            <div className="row">
                <div className="col-4">
                <Slide direction="left" triggerOnce duration={1500} delay={1100}>
                    <div className="address">
                        <div className="contact-icon-box"><IoLocationOutline /></div>
                        <h4 className="contact-add-head">Location:</h4>
                        <p className="contact-add-info">A108 Adam Street, New York, NY 535022</p>
                    </div>
                </Slide>
                <Slide direction="left" triggerOnce duration={1500} delay={1100}>
                    <div className="address contact-gap">
                        <div className="contact-icon-box"><TfiEmail /></div>
                        <h4 className="contact-add-head">Email:</h4>
                        <p className="contact-add-info">info@example.com</p>
                    </div>
                </Slide>
                <Slide direction="left" triggerOnce duration={1500} delay={1100}>
                    <div className="address contact-gap">
                        <div className="contact-icon-box"><CiMobile2 /></div>
                        <h4 className="contact-add-head">Call:</h4>
                        <p className="contact-add-info">+1 5589 55488 55s</p>
                    </div>
                    </Slide>
                </div>
                <div className="col-8">
                    <Slide direction="right" triggerOnce duration={1500} delay={1100}>
                    <div className="row">
                        <div className="col-6 form-group">
                            <input type="text" class="form-control contact-form" id="name" placeholder="Your Name" name="name"/>
                        </div>
                        <div className="col-6 form-group">
                            <input type="email" class="form-control" id="email" placeholder="Your Email" name="email"/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" class="form-control" id="subject" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea rows={5} class="form-control" id="subject" placeholder="Messages" name="message"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="send-msg-btn">Send Message</button>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}