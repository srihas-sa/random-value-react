// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  GenerateRandom = () => {
    const x = Math.floor(Math.random() * 100 + 1)
    const y = parseInt(x)
    this.setState({random: {y}})
  }

  render() {
    const {random} = this.state
    return (
      <div className="outer">
        <div className="inner">
          <h1>Random Number</h1>
          <p>Generate a Random Number Between 1 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.GenerateRandom}
          >
            Generate
          </button>
          <h1>{random}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
