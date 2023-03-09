import React from 'react'

function Friend({id, email}) {
  
  return (
    <div>
      <p key={id}>{email}</p>
    </div>
  )
}

export default Friend