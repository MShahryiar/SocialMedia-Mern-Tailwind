import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./scenes/Homepage"
import Auth from "./scenes/Auth"
import { useEffect } from 'react';

// Auth
import {auth} from "./firebaseHandler"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './scenes/ProfilePage';
import UserPage from './scenes/UserPage';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(userAuth=>{
        if (userAuth){
          // Logged In
          dispatch(
            login({
              uid:userAuth.uid,
              email:userAuth.email
            })
          )
        }
        else{
          dispatch(
            logout()
          )
        }
      })
      return unsubscribe
  },[dispatch])

  return (
    <BrowserRouter>


    {
      !user ? (
        <Auth/>
        ) : (
          <Routes>        
          <Route path="/" name="profile" element={<ProfilePage/>} />
          <Route path="/index" name="index" element={<Homepage/>} />
          <Route path="/user/:id" name="user" element={<UserPage/>} />
        </Routes>
      )
    }

    </BrowserRouter>
  )
}

export default App;
