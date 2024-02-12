import { Slide } from "react-awesome-reveal"

export const Home = () =>
{
    return(
        <section id="home-img">
            <div className="home-image-content">
                <Slide direction="up" triggerOnce duration={1500}>
                <h1 className=''>Welcome to Remember</h1>
                <h2 className=''>We are team of talented designers making websites with Bootstrap </h2>
                <button className="home-img-btn home-start-Hover ">Get Started</button>
                </Slide>
            </div>
        </section>
    )
}