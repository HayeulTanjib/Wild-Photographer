import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

const Banner = () => {

    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/G3QpmN1/b1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wild And Nature</h3>
                        <p>“You don't need beautiful weather to enjoy the evening. You only need a beautiful heart.”
                            ― Biju Karakkonam, Nature and Wildlife Photographer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/dK2FwLS/b2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Wild And Free</h3>
                        <p>“Nature is the mother of all fine art.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src="https://i.ibb.co/72WHs6v/b3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Wild And Peace</h3>
                        <p>
                        For me, Every day is Photography Day.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};

export default Banner;