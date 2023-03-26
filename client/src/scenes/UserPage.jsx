import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function UserPage() {
    const params = useParams()
    const navigate = useNavigate()
    const [posts, setUserPosts] = useState([])

    const userPosts = async() => {
            try{
    
              const api  = await fetch(`http://localhost:3001/posts/user/${params.id}`,{
                  method:"GET"
              })
              
              const data = await api.json()
              // console.log(data.Userposts)
              setUserPosts(data.Userposts)
            }
            catch(err){
              console.log(err)
            }
            
        }
    
    useEffect(()=>{
        userPosts()
    },[])
  return (

    <>
    
    <div className='w-full flex justify-between items-center p-2 bg-red-100'>
    <p>UserPage - <span className='underline'>{params.id}</span></p>
    <p className='bg-white p-2 rounded cursor-pointer' onClick={()=>navigate("/index")}>Homepage</p>

    </div>
    <div className="w-full bg-green-200 p-2 flex justify-center">
        <div className='w-1/2 h-64 bg-red-200 text-center'>
            <div>
              {
                posts?.map((post)=>(
                  <>
                  <div key={post._id} className="flex items-center underline p-5 bg-white  m-2 h-20">
                    <p key={post._id}>{post.description}</p>
                  </div>
                  </>
                ))
              }
   
            </div>
        </div>
    </div>
    </>
  )
  }
export default UserPage