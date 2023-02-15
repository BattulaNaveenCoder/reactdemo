import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

export class HoverCounter extends Component {
    
  render() {
    const{count,clickHandler} =this.props
    return (
      <div>
        <h2 onMouseOver={clickHandler}>Hovered {count} Times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,10) 