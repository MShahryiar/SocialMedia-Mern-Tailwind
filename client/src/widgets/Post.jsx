import React from 'react'
import PostForm from './PostForm'

function Post({UserId}) {
  return (
    <div className='col-span-4 bg-green-100 ' >
      
      <PostForm UserId={UserId}/>
    </div>
  )
}

export default Post