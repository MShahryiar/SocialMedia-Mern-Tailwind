import React from 'react'
import PostForm from './PostForm'

function Post({UserId}) {
  return (
    <div className='flex-1 rounded mt-2 bg-white ' >
      
      <PostForm UserId={UserId}/>
    </div>
  )
}

export default Post