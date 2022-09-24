
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Pokesapi = () => {
    const [pokes, setPokes] = useState([]);
    console.log(pokes);
    useEffect (()=>{
        const url="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
        const fetchData = async () =>{
            const res = await fetch(url);
            const data = await res.json();
            setPokes(data.results);
        }
        fetchData();
    },[]);
  return (
    <>
      <div className="container">
        <div className="row">
        <p className="text-center text-capatilize display-2" ><strong>Pokemon Kingdom</strong></p>
        </div>
         <div className="row">
            {pokes.map((val, index) => {
                    return(
                        <>
                        <div className="col mb-3">
                            <div className="card" style={{width: "18rem"}}>
                             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.url.split('/')[val.url.split('/').length - 2]}.png`} className="card-img-top" alt="pokemon"/> 
                              {/* <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} className="card-img-top" alt="Image"/>   */}
                                <div className="card-body">
                                <h5 className="card-title">{val.name}</h5>
                                <p className="card-text">Click below to know more about the Pokemon</p>
                                 <Link to={`/${val.name}`} className="btn btn-primary">Know More</Link>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>  
      </div> 
    </>
  )
}

export default Pokesapi



// import React, {createContext, useState} from 'react'
// import Pokesapi from './api/Pokesapi'
// import './App.css';
// import SinglePoke from './api/SinglePoke' 
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// export const ThemeContext = createContext(null);
// const App = () => {
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = ()=>{
//     setTheme((currenttheme)=>(currenttheme === "light" ? "dark" : "light"));
//   }
//   return (
//     <>
//       <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <div className="main" id={theme}>
//       <nav className="navbar fixed-top navbar-expand-lg">
//         <div className="container-fluid">
//           <a className="navbar-brand">Home</a>
//         <div className="form-check form-switch">
//           <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleTheme}/>
//           <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
//         </div>
//         </div>
//       </nav>
      
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Pokesapi/>}/>
//            <Route path='/:name' element={<SinglePoke/>}/>
//         </Routes>
//     </BrowserRouter>
//     </div>
//     </ThemeContext.Provider>
//     </>
//   )
// }

// export default App




// .container1 {
//   margin-top: 5em;
//   margin-left: 3em;
//   margin-right: 0em;
//   width: 40%;
// }
// .container2 {
//   margin-left: 0em;
//   margin-top: 5em;
//   width: 30%;
  
// }
// .container3 {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//  }
// .form-check-input {
//   margin-right: 0em;
//   padding-right: 0em;
// }
// img {
//   padding: 2em;
// }
// .text-center {
//   margin-top: 1em;
// }
// #light .navbar-brand {
//   color :black;
// }
// #light .navbar {
//   background-color: whitesmoke;
// }
// #light .form-check-label {
//   color: black;
// }
// #light .text-center {
//   color: teal;
//   font-style: italic;
// }
// #light .mainheading {
//   color: black;
// }
// #light .card {
//   border-color: darkslategrey;
//   border-radius: 2em;
//   box-shadow: 3px 3px slategrey;
// }
// #dark .navbar {
//   background-color: rgb(31, 29, 29);
// }
// #dark .mainhead, .mainheading {
//   color: antiquewhite;
// }
// #dark {
//   background-color: black;
// }
// #dark .navbar-brand , .form-check-label{
//   color: white;
// }
// #dark .text-center {
//   color: burlywood;
//   font-style: italic;
// }
// #dark .card {
//   border-color: dimgrey;
//   border-radius: 2em;
//   box-shadow: 3px 3px rgb(34, 34, 34);
// }