import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    
  render() {
    const {count,IncrementHandler} =this.props
    return (
      <div>
        <button onClick={IncrementHandler}>Clicked {count} time</button>
      </div>
    )
  }
}

export default ClickCounterTwo