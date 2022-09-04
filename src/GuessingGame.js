import { react, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame() {
  const [luckyNum, setLuckyNum] = useState();
  const [guess, setGuess] = useState();

  function randomNum() {
    const randomNumGenerated = Math.floor(Math.random() * 100 + 1);
    localStorage.setItem('randomNumber', JSON.stringify(randomNumGenerated));
  }

  //   const handleChange(e){

  //   };
  const handleSubmit = (e) => {};

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'></Form.Group>
        <Form.Label>
          I am thinking of a number between 1 and 100. Guess the Lucky Number!
        </Form.Label>
        {/* <Form.Control type='text' onChange={handleChange} name='userGuess' /> */}
        <Button type='submit'>Guess</Button>
      </Form>
    </div>
  );
}
export default GuessingGame;
