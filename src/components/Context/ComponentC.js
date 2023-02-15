import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (username)=>{
return <h2>Hello {username}</h2>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentC