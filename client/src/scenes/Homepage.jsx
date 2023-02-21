import React from 'react'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../firebaseHandler'

function Homepage() {
    const user = useSelector(selectUser)

  return (
    <>
    <nav className='bg-red-300 w-full p-1 flex justify-between'>
    <div className='flex items-center'><h1 className='text-2xl text-white font-bold'>Social Media App</h1></div>
    <div className='items-center flex'><p className='text-white text-xl '>Welcome - <span className='underline underline-offset-8'>{user.email}</span></p></div>
    <button className='bg-red-400 hover:bg-red-300 text-sm m-2 rounded-md p-3 text-white ' onClick={()=>auth.signOut()}>Logout</button>
    </nav>
    </>
  )
}

export default Homepage