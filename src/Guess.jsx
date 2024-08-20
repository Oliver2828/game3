import React, { useState } from 'react'

function Guess() {
const [guess, setGuess] = useState('');
const [message,setMessage] = useState('');
const [number,setNumber] = useState(Math.floor(Math.random()*11));


const handleGuessChange = (e) => {
    setGuess(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guess,10);

    if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > 10) {
        setMessage('Please enter a valid number between 0 and 10.');
    } else if (guessNumber === number){
        setMessage('Congratulations! You guessed the correct number.');
        setMessage(Math.floor(Math.random() * 11));
    } else{
        setMessage('Try again!');
    }
    setGuess('');
};



  return (
    <div className='bg-white h-[100vh] flex justify-center items-center'>
      <div className='bg-slate-300  shadow-lg text-center h-[250px] w-[35%]' >
          <h1 className='font-extrabold p-2'>Guess My Number</h1><br />
        <form onSubmit={handleSubmit}>
        <p className='font-semibold'>The Number is between 0-10</p><br />
          <input className='text-center h-10 w-40 rounded-lg' type="number" id='guess'value={guess} onChange={handleGuessChange} placeholder='Enter Your Guess' /><br />
           <p id='message'>{message}</p><br />
           <button className='w-16 h-7 bg-red-500 rounded-lg hover:bg-yellow-300 cursor-pointer' id='Guess' type='submit'>Guess</button>
        </form>
      </div>
    </div>
  )
}

export default Guess