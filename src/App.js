import React from 'react'
import Logo from './components/Navbar/Logo'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Logo />  
        <Navbar />
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
