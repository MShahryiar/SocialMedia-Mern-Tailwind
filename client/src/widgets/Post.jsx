import React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'

function Post({UserId}) {
  return (
    <div className='col-span-4 bg-green-100 ' >
      
      <PostForm UserId={UserId}/>
      <Posts/>
    </div>
  )
}

export default Post