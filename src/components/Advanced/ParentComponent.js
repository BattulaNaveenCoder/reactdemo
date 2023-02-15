import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent';
import PureComponentDemo from './PureComponentDemo';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Naveen'
      }
    }
    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name:'Naveen'
            })
        }, 2000);
    }
  render() {
    console.log('.....ParetComponent Render......')
    return (
      <div>ParentComponent
 {/* <RegularComponent name={this.state.name}/>
 <PureComponentDemo name={this.state.name}/> */}<MemoComponent name={this.state.name}/>
      </div>
     
    )
  }
}

export default ParentComponent