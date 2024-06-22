import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='mainContainer'>
        <div className='mainLeft'>
            <img src='https://firebasestorage.googleapis.com/v0/b/medium-clone-3c1d7.appspot.com/o/Portfolio%2Fuser_219976.png?alt=media&token=3a9938bd-b548-4374-8c5e-1fd36f680656'/>
        </div>

        <div className='mainRight' id='mainTitle'>
            <h1 className='brownTitle'>Hi! I am Mahamoud 👋</h1>
            <span>A full stack developer living in Tukey with the passion of solving problems. </span>
        </div>
    </div>
  )
}


 export default Main
