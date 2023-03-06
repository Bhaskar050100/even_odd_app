// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrementNumber = () => {
    const {number} = this.state
    this.setState({number: number + Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state

    const numberState = number % 2 === 0 ? 'Even' : 'Odd'
    console.log(number)
    return (
      <div className="cont">
        <div className="small-cont">
          <h1 className="main-head">Count {number}</h1>
          <p className="head">Count is {numberState}</p>
          <button
            className="btn"
            type="button"
            onClick={this.onIncrementNumber}
          >
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

EvenOddApp.defaultProps = {
  number: 0,
  numberstate: 'Even',
}
export default EvenOddApp
