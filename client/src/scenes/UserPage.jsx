import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HandThumbUpIcon as SolidThumbsUp} from "@heroicons/react/24/solid"

function UserPage() {
    const params = useParams()

    const navigate = useNavigate()
    const [posts, setUserPosts] = useState([])

    const userPosts = async() => {
            try{
    
              const api  = await fetch(`http://localhost:3001/posts/${params.id}/posts`,{
                  method:"GET"
              })
              
              const data = await api.json()
              // console.log(data.Userposts)
              setUserPosts(data.Userposts)
              // console.log(Object.keys(data.Userposts[0].likes).length)
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
        <div className='w-1/2 bg-red-200 text-center'>
            <div>
              {
                posts?.map((post)=>(
                  <>
                  <div key={post._id} className="p-5 bg-white text-xl text-start m-5 h-35">
                    <p >{post.description}</p>
                    
                    <p className='flex items-center mt-2'><SolidThumbsUp className='mr-3 text-green-600 h-10 w-10'/> {Object.keys(post.likes).length}</p>
                  </div>
                  </>
                ))
              }
   
            </div>
        </div>
    </div>
    <div>
      {/* <p>User - {params.id}</p> */}
    </div>
    </>
  )
  }
export default UserPage