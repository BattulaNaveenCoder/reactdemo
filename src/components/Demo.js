import React, { useState } from 'react'

function Demo() {
    const[name,setName]=useState("Naveen");    
   const ValueChangeHandler=(e)=>
    {

        setName(e.target.value)
    }
  return (
    <div>
        <input type='text' value={name} onChange={ValueChangeHandler}/>
    </div>
  )
}

export default Demo