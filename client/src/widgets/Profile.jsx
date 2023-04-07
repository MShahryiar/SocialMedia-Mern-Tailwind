import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserId } from '../features/userSlice'
function Profile({UserId, emailID,dob,city, country, fb, insta}) {

  return (
    <>
    
    <div className='bg-red-100 col-span-2 h-fit p-5 overflow-hidden'>

    <h1 className='underline text-2xl mb-5'>Profile</h1>
        <p>UserId : {UserId?UserId:"N/A"}</p>
        <p>Email : {emailID?emailID:"N/A"}</p>
        <p>DOB : {dob?dob.split("T")[0]:"N/A"}</p>
        <p>City : {city?city:"N/A"}</p>
        <p>Country : {country?country:"N/A"}</p>
        <p>Faebook : {fb?fb:'N/A'}</p>
        <p>Insta : {insta?insta:"N/A"}</p>
    <div>
      <h1 className='underline text-2xl '>Friends</h1>
     
    </div>
    </div>
    
    </>
  )
}

export default Profile