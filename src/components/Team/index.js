import team1 from './image/team-1.jpg';
import team2 from './image/team-2.jpg';
import team3 from './image/team-3.jpg';
import team4 from './image/team-4.jpg';
import test1 from './image/testimonials-1.jpg';
import test2 from './image/testimonials-2.jpg';
import test3 from './image/testimonials-3.jpg';
import test4 from './image/testimonials-4.jpg';
import test5 from './image/testimonials-5.jpg';
import { Zoom,Slide } from 'react-awesome-reveal';

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";

export const Team = () =>
{
    return(
        <section id="team">
            <div className="services-start-gap">
                <div className="container">
                <Zoom triggerOnce duration={1500}>
                    <div className="services-title-card">
                        <span className="services-title">TEAM</span>
                        <h3 className="services-title-card-head">Our Hard Working<span className="services-title-head-span"> Team</span></h3>
                        <p className="services-title-card-para">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div> 
                </Zoom>
                    <Teamimg/>
                </div>
                <Carousel/>
            </div>
        </section>
    )
}
const Teamimg = () =>
{
    return(
        <div>
            <div className="team">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="member">
                        <Slide direction='up' triggerOnce duration={1500} delay={1100}>
                            <div className="member-img">
                                <img src={team1} className='img-fluid'/>
                                <div className='member-info'>
                                    <h4 className='name-info'>Walter White</h4>
                                    <span className='work-info'>Chief Executive Officer</span>
                                </div>
                            </div>
                        </Slide>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="member">
                        <Slide direction='up' triggerOnce duration={1500} delay={1100}>
                            <div className="member-img">
                                <img src={team2} className='img-fluid'/>
                                <div className='member-info'>
                                    <h4 className='name-info'>Sarah Jhonson</h4>
                                    <span className='work-info'>Product Manager</span>
                                </div>
                            </div>
                        </Slide>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="member">
                        <Slide direction='up' triggerOnce duration={1500} delay={1100}>
                            <div className="member-img">
                                <img src={team3} className='img-fluid'/>
                                <div className='member-info'>
                                    <h4 className='name-info'>William Anderson</h4>
                                    <span className='work-info'>CTO</span>
                                </div>
                            </div>
                        </Slide>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="member">
                        <Slide direction='up' triggerOnce duration={1500} delay={1100}>
                            <div className="member-img">
                                <img src={team4} className='img-fluid'/>
                                <div className='member-info'>
                                    <h4 className='name-info'>Amanda Jepson</h4>
                                    <span className='work-info'>Accountant</span>
                                </div>
                            </div>
                        </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Carousel = () =>
{
    return(
        <div>
            <div className='carousel-bg'>
                <Slide direction='up' triggerOnce className='container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item testimonial-item active">
                            <img src={test1} class="carousel-img" alt="..."/>
                            <h3 className='carousel-name-text'>Saul Goodman</h3>
                            <h4 className='carousel-possition-text'>Ceo & Founder</h4>
                            <p className='carousel-para-text'><span className='left-quote'><BiSolidQuoteAltLeft /></span> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. <span className='right-quote'><ImQuotesRight /></span></p>
                        </div>
                        <div class="carousel-item testimonial-item ">
                            <img src={test2} class="carousel-img" alt="..."/>
                            <h3 className='carousel-name-text'>Sara Wilsson</h3>
                            <h4 className='carousel-possition-text'>Designer</h4>
                            <p className='carousel-para-text'><span className='left-quote'><BiSolidQuoteAltLeft /></span> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. <span className='right-quote'><ImQuotesRight /></span></p>
                        </div>
                        <div class="carousel-item testimonial-item ">
                            <img src={test3} class="carousel-img" alt="..."/>
                            <h3 className='carousel-name-text'>Jena Karlis</h3>
                            <h4 className='carousel-possition-text'>Store Owner</h4>
                            <p className='carousel-para-text'><span className='left-quote'><BiSolidQuoteAltLeft /></span> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. <span className='right-quote'><ImQuotesRight /></span></p>
                        </div>
                        <div class="carousel-item testimonial-item ">
                            <img src={test4} class="carousel-img" alt="..."/>
                            <h3 className='carousel-name-text'>Matt Brandon</h3>
                            <h4 className='carousel-possition-text'>Freelancer</h4>
                            <p className='carousel-para-text'><span className='left-quote'><BiSolidQuoteAltLeft /></span> Fugiat enim eram quae cillum dolore dolor amet nulla culpa export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. <span className='right-quote'><ImQuotesRight /></span></p>
                        </div>
                        <div class="carousel-item testimonial-item ">
                            <img src={test5} class="carousel-img" alt="..."/>
                            <h3 className='carousel-name-text'>John Larson</h3>
                            <h4 className='carousel-possition-text'>Entrepreneur</h4>
                            <p className='carousel-para-text'><span className='left-quote'><BiSolidQuoteAltLeft /></span> Quis quorum aliqua sint quem legam fore sunt eram veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. <span className='right-quote'><ImQuotesRight /></span></p>
                        </div>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
    )
}