import { useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const countTotal = (num) => {
  console.log('counting...');
  return num + 10;
};

export const UseMemo = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    console.log('useMemo fetching');
    return ['https://picsum.photos/200/300'];
  }, [slide]);

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  const total = useMemo(() => countTotal(slide), [slide]);

  const style = useMemo(
    () => ({
      color: slide > 4 ? 'red' : 'black',
    }),
    [slide],
  );

  useEffect(() => console.log('styles!'), [style]);

  return (
    <Container>
      <div className='slider w-50 m-auto'>
        <Slide getSomeImages={getSomeImages} />

        <div className='text-center mt-5'>
          Active slide {slide} <br /> {autoplay ? 'auto' : null}
        </div>

        <div className='text-center mt-5' style={style}>
          Total slides: {total}
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
