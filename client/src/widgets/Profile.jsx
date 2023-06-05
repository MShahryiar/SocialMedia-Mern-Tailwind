import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserId } from '../features/userSlice'
function Profile({hiddenClass,UserId, emailID,dob,city, country, fb, insta}) {

  return (
    <>
    
    <div className={`bg-white rounded p-5 mt-2 ${hiddenClass} h-fit p-1 overflow-hidden`}>

    <h1 className='underline text-4xl mb-5'>Profile</h1>
        <p>UserId : <br/><span className='font-bold'>{UserId?UserId:"N/A"}</span></p>
        <p>Email : <br/> <span className='font-bold'>{emailID?emailID:"N/A"}</span></p>
        <p>DOB : <br/> <span className='font-bold'>{dob?dob.split("T")[0]:"N/A"}</span></p>
        <p>City : <br/> <span className='font-bold'>{city?city:"N/A"}</span></p>
        <p>Country : <br/> <span className='font-bold'>{country?country:"N/A"}</span></p>
        <p>Faebook : <br/> <span className='font-bold'>{fb?fb:'N/A'}</span></p>
        <p>Insta : <br/> <span className='font-bold'>{insta?insta:"N/A"}</span></p>
    </div>
    
    </>
  )
}

export default Profile