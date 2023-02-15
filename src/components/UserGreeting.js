import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
  render() {
    // if(this.state.isLoggedin)
    // {
    //     return <h1>Welcome to Naveen</h1>
    // }
    // else{
    //     return <h1>Welcome to Guest</h1>
    // }
    return(
        this.state.isLoggedin ?
        <h1>Hello Naveen</h1> : <h1>Hello Guest</h1>
    )
  }
}

export default UserGreeting