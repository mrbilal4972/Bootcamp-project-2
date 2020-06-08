import React from 'react'

function Gate(props) {
  return (
    <div>
        <h4>
      Shop is {props.isOpen ? <span>Open</span> : <span>Closed</span>}
      </h4>
    </div>
  )
}

export default Gate
