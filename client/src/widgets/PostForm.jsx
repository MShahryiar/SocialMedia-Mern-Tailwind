import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PostForm({UserId}) {
    const navigate = useNavigate()
    const [postDescription, setPostDescription] = useState("")
    const [posts, setPosts] = useState([])
    const handlePostSubmission = async(e) =>{
        e.preventDefault()
        
        const response = await fetch(
            "http://localhost:3001/posts/",
            {
                method:"POST",
                headers:{
                "Content-Type":"application/json",
            },
                body: JSON.stringify({UserId, postDescription})
            })
            const Posts = await response.json()
            console.log(Posts)
            setPostDescription("")
            getPosts()
        // alert(UserId)
        // alert(postDescription)
            
    }
    


    const getPosts = async() =>{
        try{

          const api  = await fetch("http://localhost:3001/posts",{
              method:"GET"
          })
          
          const data = await api.json()
          // console.log(data.posts)
          setPosts(data.posts)
        }
        catch(err){
          console.log(err)
        }
        
    }
    useEffect(()=>{
      getPosts()
    },[])
  return (
    <>
        <form className="w-full  border-red-400" onSubmit={handlePostSubmission}>
            <div className='p-3'>
                <input maxLength={100} onChange={(e)=>setPostDescription(e.target.value)} required  className='w-full p-2 rounded-md placeholder:text-dark'  placeholder="What's on your mind today?"/>
            </div>
            <div className='justify-end flex mx-3'>
                <button className='bg-white p-3 rounded-md'>Post</button>
            </div>
        </form>
        { posts.map((post)=>(
          
          <div key={post._id} className="bg-white m-2 p-5">
            <p className='underline cursor-pointer'>{post.userId}</p>
            <p className='text-xl'>{post.description}</p>
            <div className="flex space-x-2 mt-5">
                <button className='text-xs p-2  bg-green-600 rounded-md text-white'>Like</button>
                <button className='text-xs p-2  bg-red-600 rounded-md text-white'>Dislike</button>
            </div>
          </div>
        ))
        }
    </>
  )
}

export default PostForm