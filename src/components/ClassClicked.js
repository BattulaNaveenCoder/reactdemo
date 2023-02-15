import React, { Component } from 'react'

export class ClassClicked extends Component {
    buttonclicked()
    {
        console.log('Button clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.buttonclicked}>Click Button</button>
      </div>
    )
  }
}

export default ClassClicked