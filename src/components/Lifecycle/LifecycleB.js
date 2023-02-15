import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'naveen'
      }
      console.log('Life Cycle B constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycle B getDerivedStateFromProps')
       return null;
    }
    componentDidMount(){
        console.log('Lifecycle B compounentDidMount')
    }
    
  render() {
    console.log('render')
    return (
      <div>Life Cycle B</div>
    )
  }
}

export default LifecycleB