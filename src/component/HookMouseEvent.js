import React, {useState, useEffect} from 'react'

function HookMouseEvent() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function logmouseEvent(e){
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logmouseEvent)
    }, [])

  return (
    <div>
        X: {x} -- Y: {y}
    </div>
  )
}

export default HookMouseEvent
