import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () =>
{
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h3>Remember</h3>
                            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center footer-newsletter">
                        <div className="col-6">
                            <form action method="post">
                                <div className="form-bg">
                                <input type="email"  name="email" placeholder="Enter Your Email" fdprocessedid="vzm6c8"/>
                                <input type="submit" value="Subscribe" fdprocessedid="212ud"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link/>
                </div>
                <Bottom/>
            </div>
        </footer>
    )
}
const Link = () =>
{
    return(
        <div className="link-gap">
            <div className="social-links"><a href="#"><FaTwitter /></a></div>
            <div className="social-links"><a href="#"><FaFacebookF /></a></div>
            <div className="social-links"><a href="#"><FaInstagram /></a></div>
            <div className="social-links"><a href="#"><IoLogoSkype /></a></div>
            <div className="social-links"><a href="#"><FaLinkedinIn /></a></div>
        </div>
    )
}
const Bottom = () =>
{
    return(
        <div>
            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    © Copyright 
                    <strong> Remember</strong>
                     . All Rights Reserved 
                </div>
                <div className="credits">
                    Designed by
                    <a href="https://bootstrapmade.com/"> BootstrapMade</a>
                </div>
            </div>
        </div>
    )
}