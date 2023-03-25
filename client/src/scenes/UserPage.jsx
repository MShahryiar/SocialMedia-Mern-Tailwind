import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function UserPage() {
    const params = useParams()
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
    
    <div className='w-full flex justify-center bg-red-100'>
    <p>UserPage - {params.id}</p>
    

    </div>
    <div className="w-full bg-green-200 p-2 flex justify-center">
        <div className='w-1/2 h-64 bg-red-200 text-center'>
            <div>
              {
                posts?.map((post)=>(
                  <p key={post._id} className="p-1 bg-white m-2 h-20">{post.description}</p>
                ))
              }
            </div>
        </div>
    </div>
    </>
  )
  }
export default UserPage