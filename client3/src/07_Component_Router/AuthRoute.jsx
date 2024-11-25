import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import ChangePassword from './auth/ChangePassword';
import NotFound from './error/error'

const AuthRoute = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<SignIn/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/changePassword' element={<ChangePassword/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default AuthRoute