import React, { useContext } from 'react'
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Movie_Detail from './Pages/Movie_Detail'
import AddMovie from './Pages/AddMovie'


const App = () => { 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Movie/>}/>
    <Route path='/addmovie' element={<AddMovie/>}/>
    <Route path='/movie/:id' element={<Movie_Detail/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App