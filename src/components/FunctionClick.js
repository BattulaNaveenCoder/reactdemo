import React from 'react'

function FunctionClick() {

    function buttonclicked(){
        console.log('Button clicked')
    }
  return (
    <div>
        <button onClick={buttonclicked}>Click</button>
    </div>
  )
}

export default FunctionClick
