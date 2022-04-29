import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='container shadow rounded p-3 mb-2 bg-body'>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://garagegympro.com/wp-content/uploads/2021/09/Cap-Barbell-FM-8000F-Half-Rack.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Squat Rack</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://garagegympro.com/wp-content/uploads/2021/09/ARCHON-Wall-Mount-Cable-Crossover-Station.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className=' text-danger' >Cable Crossover Machine</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://garagegympro.com/wp-content/uploads/2021/09/Livebest-Adjustable-Power-Tower.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>Power Tower</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>

    );
};

export default Banner;