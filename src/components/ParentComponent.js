import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Parent:'Iam Parent'
      }
      this.ParentHandler=this.ParentHandler.bind(this)
    }
    ParentHandler(childName){
        alert(`Hello ${this.state.Parent} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.ParentHandler}/>
      </div>
    )
  }
}

export default ParentComponent