import { FaPlay } from "react-icons/fa";
import { BiFingerprint } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { FaReact } from "react-icons/fa6";
import { Fade, Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import CountUp from 'react-countup';

export const About = () =>
{
    return(
        <div className="about-start-gap">
            <div className="container">
                <div className="row">
                    <Zoom className="col-lg-6 d-flex about-img" triggerOnce cascade damping={0.1} duration={2000}>
                        <a href="#" className="about-play-btn"><FaPlay /></a>
                    </Zoom>
                    <div className="col-lg-6 flex-column">
                        <Slide  direction="up" triggerOnce duration={1500} delay={1200}>
                            <div  className="border-box">
                            <span className="about-title">ABOUT US</span>
                            <h3 className="about-head">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p className="about-para">Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                            </div>
                        </Slide>
                        <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                        <div  className="border-box mainHover">
                            <div className="about-icon-box home-start-Hover"><BiFingerprint /></div>
                            <h3 className="about-icon-head">Lorem Ipsum</h3>
                            <p className="about-icon-para">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        </Slide>
                        <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                        <div  className="border-box mainHover">
                            <div className="about-icon-box home-start-Hover"><GoGift /></div>
                            <h3 className="about-icon-head">Nemo Enim</h3>
                            <p className="about-icon-para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                        </Slide>
                        <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                        <div  className="border-box mainHover">
                            <div className="about-icon-box home-start-Hover"><FaReact /></div>
                            <h3 className="about-icon-head">Dine Pad</h3>
                            <p className="about-icon-para">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                        </div>
                        </Slide>
                    </div>
                </div>
                <Whyus/>
                <Whyuscard/>
                <Whyuscount/>
            </div>
            <Whyusimg/>
        </div>    
    )
}
const Whyus = () =>
{
    return(
        <div>
            <Zoom triggerOnce duration={1500} delay={1200}>
            <div className="home-image-content">
                <span className="whyus-title">WHY US</span>
                <h3 className="whyus-head">Why you should <span className="second-span">choose us</span>?</h3>
                <p className="whyus-head2">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br></br>adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            </Zoom>
        </div>
    )
}
const Whyuscard = () =>
{
    return(
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                    <div className="whyus-card whyus-card:Hover">
                        <span className="whyus-card-span">01</span>
                        <h4 className="whyus-card-head">Lorem Ipsum</h4>
                        <p className="whyus-card-para">Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                    </div>
                    </Slide>
                </div>
                <div className="col-md-4">
                    <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                    <div className="whyus-card">
                        <span className="whyus-card-span">02</span>
                        <h4 className="whyus-card-head">Repellat Nihil</h4>
                        <p className="whyus-card-para">Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno</p>
                    </div>
                    </Slide>
                </div>
                <div className="col-md-4">
                    <Slide direction="up" triggerOnce duration={1500} delay={1200}>
                    <div className="whyus-card">
                        <span className="whyus-card-span">03</span>
                        <h4 className="whyus-card-head">Ad ad velit qui</h4>
                        <p className="whyus-card-para">Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
const Whyuscount = () =>
{
    return(
        <div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="whyus-count-box">
                        <div>
                            <CountUp className="whyus-count-span" start={0} end={232}  duration={2.5} separator="," />
                        </div>  
                        <p className="whyus-count-para">Clients</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="whyus-count-box">
                        <div>
                            <CountUp className="whyus-count-span" start={0} end={521} duration={2.5} separator="," />
                        </div>
                        <p className="whyus-count-para">Projects</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="whyus-count-box">
                        <div>
                            <CountUp className="whyus-count-span" start={0} end={1463} duration={2.5} separator="," />
                        </div>
                        <p className="whyus-count-para">Hours Of Support</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="whyus-count-box">
                        <div>
                            <CountUp className="whyus-count-span" start={0} end={15} duration={2.5} separator="," />
                        </div>
                        <p className="whyus-count-para">Hard Workers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Whyusimg = () =>
{
    return(
        <div>
            <div className="whyus-bg-img">
                <div className="whyus-bg-content">
                    <Zoom triggerOnce duration={1500} delay={1200}>
                    <h3 className="whyus-bg-head">Call To Action</h3>
                    <p className="whyus-bg-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="whyus-bg-btn whyus-bg-btn-Hover">Call To Action</button>
                    </Zoom> 
                </div>
            </div>
        </div>
    )
}