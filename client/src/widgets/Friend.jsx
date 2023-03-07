import React from 'react'

function Friend({key, friendId}) {
  return (
    <div key={key}><p>{friendId}</p></div>
  )
}

export default Friend