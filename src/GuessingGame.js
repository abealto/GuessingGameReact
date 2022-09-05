import { React, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GuessingGame() {
  const [luckyNum, setLuckyNum] = useState(null);
  const [guess, setGuess] = useState('');

  console.log(guess);

  useEffect(() => {
    if (luckyNum === null) {
      setLuckyNum(JSON.parse(localStorage.getItem('genNumber')) || randomNum());
    }
  }, [guess, luckyNum]);

  const randomNum = () => {
    const randomNumGenerated = Math.floor(Math.random() * 100 + 1);
    localStorage.setItem('genNumber', JSON.stringify(randomNumGenerated));
    console.log(randomNumGenerated);
    return randomNumGenerated;
  };

  const handleChange = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setGuess('');
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
      </Form>
    </div>
  );
}
export default GuessingGame;
