import React, { PureComponent } from 'react'

class PureComponentDemo extends PureComponent {
  render() {
    console.log('Pure Component')
    return (
      <div>pureComponentDemo {this.props.name}</div>
    )
  }
}

export default PureComponentDemo