import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export const UseCallback = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    console.log('useCallback fetching');
    return ['https://picsum.photos/200/300', ' https://picsum.photos/200/300'];
  }, [slide]);

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  return (
    <Container>
      <div className='slider w-50 m-auto'>
        {/* {getSomeImages().map((url, i) => {
          return (
            <img key={i} className='d-block w-100' src={url} alt='slide' />
          );
        })} */}

        <Slide getSomeImages={getSomeImages} />

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

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className='d-block w-100' src={url} alt='slide' />
      ))}
    </>
  );
};
