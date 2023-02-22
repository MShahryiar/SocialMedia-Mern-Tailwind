import React from 'react'

function Profile({emailID,dob,city, country, fb, insta}) {
  return (
    <div className='bg-red-100 col-span-2 overflow-hidden'>

        <p>Profile</p>
        <p>Email : {emailID}</p>
        <p>DOB : {dob}</p>
        <p>City : {city}</p>
        <p>Country : {country}</p>
        <p>Faebook : {fb}</p>
        <p>Insta : {insta}</p>
    </div>
  )
}

export default Profile