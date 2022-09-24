import React, {createContext, useState} from 'react'
import Pokesapi from './api/Pokesapi'
import './App.css';
import SinglePoke from './api/SinglePoke' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const ThemeContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = ()=>{
    setTheme((currenttheme)=>(currenttheme === "light" ? "dark" : "light"));
  }
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="main" id={theme}>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">Home</a>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleTheme}/>
          <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        </div>
      </nav>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokesapi/>}/>
           <Route path='/:name' element={<SinglePoke/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
