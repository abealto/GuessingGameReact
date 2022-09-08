import { React, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Start Guessing');
  const [luckyNum, setLuckyNum] = useState(null);
  const [timesGuessed, setTimesGuessed] = useState(null);

  console.log(guess);

  useEffect(() => {
    if (luckyNum === null) {
      setLuckyNum(JSON.parse(localStorage.getItem('genNumber')) || randomNum());
    }

    if (timesGuessed === null) {
      setTimesGuessed(JSON.parse(localStorage.getItem('timesGuessed')) || 0);
    }
  }, [guess, luckyNum, timesGuessed]);

  const randomNum = () => {
    const randomNumGenerated = Math.floor(Math.random() * 100);
    localStorage.setItem('genNumber', JSON.stringify(randomNumGenerated));
    console.log(randomNumGenerated);
    return randomNumGenerated;
  };

  const handleChange = (e) => {
    if (!isNaN(e.target.value)) {
      setGuess(e.target.value);
    } else {
      alert('you must type in a number :)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberGuessed = parseInt(guess);
    if (numberGuessed === luckyNum) {
      setMessage('Congrats you guessed it!');
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem('timesGuessed', JSON.stringify(timesGuessed + 1));
    } else if (numberGuessed < luckyNum) {
      setMessage('Number is too low');
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem('timesGuessed', JSON.stringify(timesGuessed + 1));
    } else if (numberGuessed > luckyNum) {
      setMessage('Number is too high');
      setTimesGuessed(timesGuessed + 1);
      localStorage.setItem('timesGuessed', JSON.stringify(timesGuessed + 1));
    }
  };

  const handleReset = () => {
    setGuess('');
    setMessage('Start Guessing');
    setTimesGuessed(0);
    localStorage.removeItem('genNumber');
    localStorage.removeItem('timesGuessed');
    setLuckyNum(randomNum());
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>
            I am thinking of a number between 1 and 100. Guess the Lucky Number!
          </Form.Label>
          <br />
          <Form.Label>You have made {timesGuessed} guesses</Form.Label>
          <Form.Control
            type='text'
            value={guess}
            onChange={handleChange}
            name='userGuess'
          />
        </Form.Group>
        <Button type='submit'>Guess</Button>
        <br />
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
