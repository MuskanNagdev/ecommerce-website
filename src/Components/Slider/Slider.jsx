import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide1 from "../../Images/kid1.png";
import slide2 from "../../Images/kid2.jpg";
import slide3 from "../../Images/kid3.jpg";
import './Slider.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        partialVisibilityGutter: 20
    }
};

function Slider() {
    return (
        <div>
            <section className="slider container mb-3">
                {/* <span>Whats New</span> */}
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true} // Enable infinite loop
                    containerClass="slide-container"
                >
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="Slide 1"
                        />
                        <div className="slide-title">Ready to Wear</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Slide 2"
                        />
                    <div className="slide-title">Unstitched</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Slide 3"
                        />
                    <div className="slide-title">Ready to Wear</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Slide 2"
                        />
                        <div className="slide-title">Unstitched</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Slide 3"
                        />
                    <div className="slide-title">Western</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Slide 2"
                        />
                        <div className="slide-title">Ready to Wear</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Slide 3"
                        />
                        <div className="slide-title">Unstitched</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Slide 2"
                        />
                        <div className="slide-title">Unstitched</div>
                    </div>
                    <div className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Slide 3"
                        />
                        <div className="slide-title">Unstitched</div>
                    </div>
                    
                </Carousel>
            </section>
        </div>
    );
}

export default Slider;
