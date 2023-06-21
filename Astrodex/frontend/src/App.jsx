import './App.css'
import Appbar from './components/Appbar'
import AstroDeck from './pages/AstroDeck'
import AstroProfile from './pages/AstroProfile'
import Home from './pages/Home'

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
   
       <BrowserRouter>
          <Routes>
              <Route path='/' element= {<AstroDeck/>}></Route>
              {/* <Route path='/home' element= {<Home/>}/> */}
              <Route path='/astroprofile/:id' element = {<AstroProfile/>}/>
          </Routes>
       </BrowserRouter>
   
  )
}

export default App
