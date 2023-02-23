import React from 'react'

function Profile({UserId, emailID,dob,city, country, fb, insta}) {
  return (
    <div className='bg-red-100 col-span-2 overflow-hidden'>

        <p>Profile</p>
        <p>UserId : {UserId}</p>
        <p>Email : {emailID}</p>
        <p>DOB : {dob.split("T")[0]}</p>
        <p>City : {city}</p>
        <p>Country : {country}</p>
        <p>Faebook : {fb}</p>
        <p>Insta : {insta}</p>
    </div>
  )
}

export default Profile