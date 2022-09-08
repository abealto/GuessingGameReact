import { React, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame() {
  const [luckyNum, setLuckyNum] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Start Guessing');

  console.log(guess);

  useEffect(() => {
    if (luckyNum === null) {
      setLuckyNum(JSON.parse(localStorage.getItem('genNumber')) || randomNum());
    }
  }, [guess, luckyNum]);

  const randomNum = () => {
    const randomNumGenerated = Math.floor(Math.random() * 100);
    localStorage.setItem('genNumber', JSON.stringify(randomNumGenerated));
    console.log(randomNumGenerated);
    return randomNumGenerated;
  };

  const handleChange = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const numberGuessed = parseInt(guess);
    if (numberGuessed === luckyNum) {
      setMessage('Congrats you guessed it!');
    } else if (numberGuessed < luckyNum) {
      setMessage('Number is too low');
    } else if (numberGuessed > luckyNum) {
      setMessage('Number is too high');
    }
  };

  const handleReset = () => {
    setGuess('');
    setMessage('Start Guessing');
    localStorage.removeItem('genNumber');
    setLuckyNum(randomNum());
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'></Form.Group>
        <Form.Label>
          I am thinking of a number between 1 and 100. Guess the Lucky Number!
        </Form.Label>
        <Form.Control
          type='text'
          value={guess}
          onChange={handleChange}
          name='userGuess'
        />
        <br />
        <Button type='submit'>Guess</Button>
        <br />
        <Button type='button' onClick={handleReset}>
          Reset
        </Button>
        <br />
        <Form.Label>{message}</Form.Label>
        <br />
      </Form>
    </div>
  );
}
export default GuessingGame;
