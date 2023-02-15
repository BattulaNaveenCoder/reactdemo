import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    TextChanged=(e)=>{
      
        this.setState({
            
            username:e.target.value,
            
        })
        console.log(this.username)
    }
    CommentChanged=(e)=>{
      
       this.setState({
        comments:e.target.value
       })
    }
    topicChanged=(e)=>{
        
        this.setState({
            topic:e.target.value
        })
    }
    handleSubmit=(e)=>{
        alert(`Username=${this.state.username},Comments=${this.state.comments} and topic=${this.state.topic}`)
       e.preventdefault()
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text'value={this.state.username} onChange={this.TextChanged}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea type='text' value={this.state.comments} onChange={this.CommentChanged} />
        </div>
        <div>
            <label>topic</label>
            <select value={this.state.topic} onChange={this.topicChanged}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form