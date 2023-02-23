import React, { useState } from 'react'

function PostForm({UserId}) {
    const [postDescription, setPostDescription] = useState("")

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
        // alert(UserId)
        // alert(postDescription)
            
    }
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
        
    </>
  )
}

export default PostForm