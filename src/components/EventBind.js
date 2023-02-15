import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    // //   this.buttonClicked=this.buttonClicked.bind(this)
    }

    //this is 1st Approch for Event Binding

    //  buttonClicked(){
    //      this.setState({
    //          message:'Good bye!'
    //      })
    //     console.log(this)
    //  }

    //this is 2&4st Approch for Event Binding
    // buttonClicked(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    // }

    buttonClicked=()=>{
        this.setState({
            message:'Good Bye!'
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* 1st Approch */}
        {/* <button onClick={this.buttonClicked.bind(this)}>Click</button> */}

{/* 2nd Approch - Using Arrow functions in Render method */}
        {/* <button onClick={()=>this.buttonClicked()}>Click</button> */}

{/* 3rd Approch */}
        {/* <button onClick={this.buttonClicked}>Click</button> */}

{/* 4th Approch */}
        <button onClick={this.buttonClicked}>Click</button>
      </div>
    )
  }
}

export default EventBind