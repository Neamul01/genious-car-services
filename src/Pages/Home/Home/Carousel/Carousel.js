import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Carousels = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        fetch("carousel.json").then(res => res.json()).then(data => setSliders(data))
    }, [])


    const sliderImg = [];
    sliders.map(slider => sliderImg.push(slider.img))



    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg[0]}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg[1]}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg[2]}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;