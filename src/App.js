import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<Signin />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
