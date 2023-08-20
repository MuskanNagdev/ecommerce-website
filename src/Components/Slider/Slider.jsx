import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../Images/kid1.png";
import slide2 from "../../Images/kid2.jpg";
import slide3 from "../../Images/kid3.jpg";
import './Slider.css'; // Import the CSS file

function Slider() {
    return (
        <div>
            <section className="slider container mb-3">
                <Carousel>
                    <Carousel.Item className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='slide'>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
}

export default Slider;
