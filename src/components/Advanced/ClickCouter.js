import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

export class ClickCouter extends Component {
    
  render() {
    const {count,clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>Click {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCouter,5) 