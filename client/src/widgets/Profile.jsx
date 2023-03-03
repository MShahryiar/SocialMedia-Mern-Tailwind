import React, { useState, useEffect } from 'react'

function Profile({UserId, emailID,dob,city, country, fb, insta}) {







  return (
    <>
    
    <div className='bg-red-100 col-span-2 h-fit p-5 overflow-hidden'>

    <h1 className='underline text-2xl mb-5'>Profile</h1>
        <p>UserId : {UserId}</p>
        <p>Email : {emailID}</p>
        <p>DOB : {dob.split("T")[0]}</p>
        <p>City : {city}</p>
        <p>Country : {country}</p>
        <p>Faebook : {fb}</p>
        <p>Insta : {insta}</p>
    <div>
      <h1 className='underline text-2xl '>Friends</h1>
     
    </div>
    </div>
    
    </>
  )
}

export default Profile