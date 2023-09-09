import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery'
import News from '../pages/News';
import Root from '../pages/Root';
import SinglePost from '../pages/SinglePost';
import Admission from '../pages/Admission';
import OnlineCourses from '../pages/OnlineCourses';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import SignUp from '../pages/SignUp';
import Payment from '../pages/Payment';

const Router = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Root />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/news' element={<News />} />
                <Route path='/posts/:postId' element={<SinglePost />} />
                <Route path='/admission' element={<Admission />} />
                <Route path='/online-course' element={<OnlineCourses />} />
                <Route path='/user-profile' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
            </Route>            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>        
      </HashRouter>
  )
}

export default Router