import {Component} from 'react'
import './index.css'

class RandomNumberGenerato extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div>
        <div className="random-number-generator-container ">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range 0 to 100
          </p>
          <button
            className="generate-button  generate-button:active"
            onClick={this.generateRandomNumber}
            type="button"
          >
            Generate
          </button>
          <p> {randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerato
