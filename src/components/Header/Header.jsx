import React from 'react'
import reacImg from '../../assets/react-core-concepts.png'
import './Header.css'
const description = ['Fundamental', 'Crucial','Core'];
function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}


const Header = () => {
  const loop = description[genRandomInt(2)];
 
  return (
    <div>
        <header>
        <img src={reacImg} alt="react-atom" />
        <h1>React Essentials</h1>
        <p>
          {loop} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  )
}

export default Header