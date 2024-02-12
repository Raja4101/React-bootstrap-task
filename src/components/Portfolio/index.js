import img1 from './image/portfolio-1.jpg';
import img2 from './image/portfolio-2.jpg';
import img3 from './image/portfolio-3.jpg';
import img4 from './image/portfolio-4.jpg';
import img5 from './image/portfolio-5.jpg';
import img6 from './image/portfolio-6.jpg';
import img7 from './image/portfolio-7.jpg';
import img8 from './image/portfolio-8.jpg';
import img9 from './image/portfolio-9.jpg';
import { FaPlus } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { Zoom,Slide } from 'react-awesome-reveal';

export const Portfolio = () =>
{
    return(
        <section id="portfolio">
            <div className="services-start-gap">
                <div className="container">
                    <div className="services-title-card">
                        <Zoom triggerOnce duration={1500} delay={1200}>
                        <span className="services-title">PORTFOLIO</span>
                        <h3 className="services-title-card-head">Check Our<span className="services-title-head-span"> Portfolio</span></h3>
                        <p className="services-title-card-para">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                        </Zoom>
                    </div> 
                    <Portfoliobtn/>
                    <Portfolioimg/>       
                </div>
            </div>
        </section>
    )
}
const Portfoliobtn = () =>
{
    return(
        <div>
            <div className="d-flex justify-content-center mt-2">
                <Slide direction='up' triggerOnce duration={1500} delay={1100}>
                <button className="portfolio-btn portfolio-btn-act active">All</button>
                <button className="portfolio-btn portfolio-btn-Hover">App</button>
                <button className="portfolio-btn portfolio-btn-Hover">Card</button>
                <button className="portfolio-btn portfolio-btn-Hover">Web</button>
                </Slide>
            </div>            
        </div>
    )
}
const Portfolioimg = () =>
{
    return(
        <div>
            <div className="row" style={{position:'relative'}}>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img1} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">App 1</h3>
                        <p className="text2">App</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img2} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Web3</h3>
                        <p className="text2">Web</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img3} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">App2</h3>
                        <p className="text2">App</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img4} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Card 2</h3>
                        <p className="text2">Card</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img5} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Web 2</h3>
                        <p className="text2">Web</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img6} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">App 3</h3>
                        <p className="text2">App</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img7} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Card 1</h3>
                        <p className="text2">Card</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img8} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Card 3</h3>
                        <p className="text2">Card</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
                <div className="col-md-4 mt-4 portfolio-img">
                    <Slide direction='up' triggerOnce duration={1500}>
                    <img src={img9} className='portfolio-img-cover'/>
                    </Slide>
                    <div className="overlay">
                        <h3 className="text1">Web 3</h3>
                        <p className="text2">Web</p>
                        <a href='#' className='icon1'><FaPlus /></a>
                        <a href='#' className='icon2'><FaLink /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}