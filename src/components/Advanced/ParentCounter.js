import React, { Component } from 'react'

class ParentCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      IncrementHandler=()=>{
          this.setState((previous)=>{
              return({
                  count:previous.count + 1
              })
          })
      }
  render() {
    return (
      <div>{this.props.render(this.state.count,this.state.IncrementHandler)}</div>
    )
  }
}

export default ParentCounter