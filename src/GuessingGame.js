import { react, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function GuessingGame() {
  const [guess, setGuess] = useState();

  const gameText =
    'I am thinking of a number between 1 and 100. Guess the Lucky Number!';
  const numOfGuess = 'you have made ... guesses';
  const currect = 'You guessed currectly';
  const tooLow = 'too low';
  const tooHight = 'too high';

  function handleChange(e) {
    setGuess(e.target.value);
  }

  return (
    <div>
      <p>{gameText}</p>
      <p>{numOfGuess}</p>
      <Form>
        <Form.Group className='mb-3'></Form.Group>
        <Form.Control type='text' onChange={handleChange} name='userGuess' />
        <Button type='submit'>Guess</Button>
      </Form>
    </div>
  );
}
export default GuessingGame;
