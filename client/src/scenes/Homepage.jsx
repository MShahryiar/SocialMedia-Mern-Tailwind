import React, { useEffect, useState } from 'react'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebaseHandler'
import Profile from '../widgets/Profile'
import Post from '../widgets/Post'
import Friends from '../widgets/Friends'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const email = user.email
  const [userProfile, setUserProfile] = useState("")
  const emailID = userProfile.email
  const dob = String(userProfile.dob)
  const city = userProfile.city
  const country = userProfile.country
  const fb = userProfile.fbLink
  const insta = userProfile.InstaLink

  
  const getUser = async() => {
    try{

      const response = await fetch(
        `http://localhost:3001/users/${user.email}`,
        {
        method:"GET",
        });
        
      const userProfile = await response.json()
        const user = userProfile.user[0]
        setUserProfile(user)
        // console.log(userProfile.user[0])


    }
    catch(err){
      console.log(err)
    }
      
  }


  useEffect(()=>{
    getUser()
    // eslint-disable-next-line
  },[])

  return (
    <>
    <nav className='bg-red-300 w-full p-1 flex justify-between'>
    <div className='flex items-center'><h1 className='text-2xl text-white font-bold'>Social Media App</h1></div>
    <div className='items-center flex'><p className='text-white text-xl '>Welcome - <span className='underline underline-offset-8 cursor-pointer' onClick={() => navigate("/")}>{user.email}</span></p></div>
    <button className='bg-red-400 hover:bg-white hover:text-red-400 hover:border-red-400 text-sm m-2 rounded-md p-3 text-white ' onClick={()=>auth.signOut()}>Logout</button>
    </nav>
    
    <div className='grid grid-cols-8 gap-3 m-2'>
      
      <Profile UserId={userProfile._id} emailID={emailID} dob={dob} city={city} country={country} fb={fb} insta={insta}/>
      <Post UserId={userProfile._id}/>
      <Friends Email={email} UserId={userProfile._id}/>
    
    </div>
    </>
  )
}

export default Homepage