import React from 'react'

function MediaCard({title, body, imageURL}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={(imageURL)} />
    </div>
  )
}

export default MediaCard
