import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserId } from '../features/userSlice'
function Profile({UserId, emailID,dob,city, country, fb, insta}) {

  return (
    <>
    
    <div className='bg-white rounded mt-2 col-span-2 h-fit p-1 overflow-hidden'>

    <h1 className='underline text-2xl mb-5'>Profile</h1>
        <p>UserId : {UserId?UserId:"N/A"}</p>
        <p>Email : {emailID?emailID:"N/A"}</p>
        <p>DOB : {dob?dob.split("T")[0]:"N/A"}</p>
        <p>City : {city?city:"N/A"}</p>
        <p>Country : {country?country:"N/A"}</p>
        <p>Faebook : {fb?fb:'N/A'}</p>
        <p>Insta : {insta?insta:"N/A"}</p>
    </div>
    
    </>
  )
}

export default Profile