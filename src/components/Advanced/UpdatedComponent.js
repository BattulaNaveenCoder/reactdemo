import React, { Component } from 'react'

const UpdatedComponent=(OriginalComponent,IncrementNumber)=>{
class NewComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      clickHandler=()=>{
         this.setState( previous =>{
          return {count:previous.count + IncrementNumber}
         })
      }
    render(){
        return <OriginalComponent count={this.state.count} clickHandler={this.clickHandler}/>
    }
}
return NewComponent
}

export default UpdatedComponent