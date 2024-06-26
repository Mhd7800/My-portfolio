import React from 'react'
import Main from './Components/Main/Main'
import Projects from './Components/Projects/Projects'
import Stack from './Components/Stack/Stack'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import About from './Components/About/About'

const Layout = () => {
  return (
    <div>
        <Header />
        <Main/>
        <Projects/>
        <Stack/>
        <About/>
        <Contact/>
      
    </div>
  )
}

export default Layout
