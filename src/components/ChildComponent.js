import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.clickHandler('Naveen')}>click</button>
    </div>
  )
}

export default ChildComponent