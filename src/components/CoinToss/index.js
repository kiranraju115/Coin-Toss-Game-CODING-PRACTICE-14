// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButtonToss = () => {
    const {headsCount, tailsCount} = this.state

    let tossImage = ''
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (tossResult === 0) {
      tossImage = headImage
      latestHeadCount += 1
    } else {
      tossImage = tailImage
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
    console.log(headsCount, tailsCount)
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="header">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickButtonToss}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="Count">Total: {total}</p>
            <p className="Count">Heads: {headsCount}</p>
            <p className="Count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
