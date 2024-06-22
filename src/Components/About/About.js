import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='aboutContainer'>

        <div className='aboutLeft'>
            <h2 className='brownTitle'>About me 😇</h2>
           <p> 
           Hi again! Thank you for scrolling so far! I graduated from Karabuk University and I am from Chad (a country in the center of Africa, lol 😅).<br></br>
           Other than coding, I like to play football, read books, and learn languages. By the way, I speak three languages besides English. 
           My native languages are French and Arabic.<br></br> I am also fluent in Turkish, and I can spend a day in Madrid with my Spanish 😄.
           </p>
        </div>
        <div className='aboutRight'>
            <img src='https://firebasestorage.googleapis.com/v0/b/medium-clone-3c1d7.appspot.com/o/Portfolio%2FIMG_7778.jpg?alt=media&token=1ddcce0c-9afa-41f4-bcd1-89f82fff47d8'>
            </img>
        </div>
    </div>
  )
}
export default About
