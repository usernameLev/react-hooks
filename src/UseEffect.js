import { useEffect } from 'react';
import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';

export const UseEffect = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    console.log('effect');
    document.title = `Slide ${slide}`;
  }, [slide]);

  useEffect(() => {
    console.log('autoplay');
  }, [autoplay]);

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  return (
    <Container>
      <div className='slider w-50 m-auto'>
        <img
          className='d-block w-100'
          src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
          alt='slide'
        />
        <div className='text-center mt-5'>
          Active slide {slide} <br /> {autoplay ? 'auto' : null}
        </div>
        <div className='buttons mt-3'>
          <button
            className='btn btn-primary me-2'
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className='btn btn-primary me-2'
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className='btn btn-primary me-2' onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};
