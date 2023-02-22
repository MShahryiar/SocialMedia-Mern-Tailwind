import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../features/userSlice'

function ProfilePage() {
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const email = user.email
  const [dob, setDob] = useState("")
  const [city, setCity] = useState("")
  const [country, setcountry] = useState("")
  const [fbLink, setFbLink] = useState("")
  const [InstaLink, setInstaLink] = useState("")
  
  const handleUserSubmission = async(e) =>{
    e.preventDefault()
    
    const response = await fetch(
      "http://localhost:3001/{}",
      {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({name, email, dob, city, country, fbLink, InstaLink})
    })
    const userProfile = await response.json()
  }


  return (
     <div className='h-screen bg-red-100 flex justify-center  items-center'>
     <div className=' bg-white w-1/4 rounded-lg p-3'>
             <h1 className='text-center my-5 text-2xl'>Profile Section</h1>
             <form  className='w-full' onSubmit={handleUserSubmission}>
                 <input type="text" disabled value={user.email} className="w-full text-gray-800 bg-red-100/30 p-5" />
                 <input required type="text" maxLength={50} value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter Full Name" className="w-full text-gray-800 bg-red-100 p-5"/>
                 <input required type="date" value={dob} onChange={(e)=>setDob(e.target.value)} className="w-full mt-2 bg-red-100 p-5" />
                 <input required type="text" maxLength={50} onChange={(e)=>setCity(e.target.value)} value={city} placeholder="City" className="w-full mt-2 bg-red-100 p-5" />
                 <input required type="text" maxLength={50} value={country} onChange={(e)=>setcountry(e.target.value)} placeholder="Country" className="w-full mt-2 bg-red-100 p-5" />
                 <input required type="text"  value={fbLink} placeholder="Facebook Link" onChange={(e)=>setFbLink(e.target.value)} className="w-full mt-2 bg-red-100 p-5" />
                 <input required type="text" value={InstaLink}  placeholder="Instagram Link" onChange={(e)=>setInstaLink(e.target.value)} className="w-full mt-2 bg-red-100 p-5" />
                 
                 <div className='mt-3 flex justify-between'>

                 <button className='bg-teal-600 w-1/1  rounded-lg p-3 text-white hover:bg-teal-500'>Save Information</button>
                 <button className=' w-1/1  rounded-lg p-3  hover:bg-teal-600 hover:text-white bg-teal-600/20' onClick={()=>navigate("/")}>Home Page</button>
                 </div>
             </form>
     </div>
 </div> 
  )
}

export default ProfilePage