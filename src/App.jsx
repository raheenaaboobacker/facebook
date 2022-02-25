import  Profile  from './Pages/Profile/Profile';
import Home from './Pages/Home/Home'
import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
 import Leftcompnt from './components/Leftcompnt/Leftcompnt';
import render from "react-dom"
import {BrowserRouter,
Routes,
Route
} from "react-router-dom";

function App() {
    return (
        
    <div>
      
           <BrowserRouter>
           <Routes>
               <Route path='/' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/home' element={<Home/>}/>

      
               <Route path='/login' element={<Login/>}/>

               <Route path='/profile' element={<Profile/>}/>
               
           </Routes>
           </BrowserRouter>
       
      </div>
    );
    
}

export default App;