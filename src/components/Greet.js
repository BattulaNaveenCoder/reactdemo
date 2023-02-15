import React from 'react'

// function Greet() {
//   return (
//     <div>Hello Naveen</div>
//   )
// }

const Greet=(props)=>{
    const{name,heroname}=props
return(   
<div>
<h1>Hello {name} my favorite Hero is {heroname}</h1>
{/* {props.children} */}
</div>

)}
    
export default Greet