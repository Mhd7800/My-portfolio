import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='mainWrapper'>
        <div className='mainContainer'>
        <div className='mainLeft'>
            <img src='https://firebasestorage.googleapis.com/v0/b/medium-clone-3c1d7.appspot.com/o/Portfolio%2Fuser_219976.png?alt=media&token=3a9938bd-b548-4374-8c5e-1fd36f680656' alt='hero'/>
        </div>

        <div className='mainRight' id='mainTitle'>
            <h1 className='brownTitle'>Hi! I am Mahamoud 👋</h1>
            <span>A full stack developer living in Tukey with the passion of solving problems. </span>
        </div>
        </div>

        <div className='arrowdown'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="brown" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>        
        </div>
    </div>
  )
}


 export default Main
