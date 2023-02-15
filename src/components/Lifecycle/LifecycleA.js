import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'naveen'
      }
      console.log('Life Cycle A constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycle A getDerivedStateFromProps')
       return null;
    }
    componentDidMount(){
        console.log('Lifecycle A compounentDidMount')
    }
    
  render() {
    console.log('render')
    return (
    <div>
      <div>Life Cycle A</div>
      <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA