import React, { Component } from 'react'

export class HoverCountTwo extends Component {
    
  render() {
    const {count,IncrementHandler} =this.props
    return (
      <div>
        <h2 onMouseOver={IncrementHandler}>Hovered {count} Times</h2>
      </div>
    )
  }
}

export default HoverCountTwo