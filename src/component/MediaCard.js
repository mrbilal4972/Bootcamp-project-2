import React from 'react';

const MediaCard = ({title, body, imageURL, isOpen}) => (
  <div>
    <h2>{title}</h2>
    {isOpen ? <h3>Open</h3> : <h6>Closed</h6>}
    <p>{body}</p>
    <img src={imageURL} />
  </div>
)

export default MediaCard;
