import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

export const UseRef = (props) => {
  const [text, setText] = useState('');

  const myRef = useRef(1);

  useEffect(() => {
    myRef.current = text;
  });

  return (
    <Container>
      <form className='w-50 border mt-5 p-3 m-auto'>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email address
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            Example textarea
          </label>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            value={myRef.current}
          ></textarea>
        </div>
      </form>
    </Container>
  );
};