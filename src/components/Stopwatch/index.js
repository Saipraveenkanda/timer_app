import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({timeElapsedInSeconds: 0})
  }

  timeIntervalCounter = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartTimer = () => {
    this.timerId = setInterval(this.timeIntervalCounter, 1000)
  }

  onClickStopTimer = () => {
    const {timeElapsedInSeconds} = this.state
    if (timeElapsedInSeconds > 0) {
      this.clearTimerInterval()
    }
  }

  renderTimerInMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedTimeInMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedTimeInSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedTimeInMinutes}:${stringifiedTimeInSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="logo-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer-running">{this.renderTimerInMinutes()}</h1>
          <div className="controls-card">
            <button
              className="start-btn"
              type="button"
              onClick={this.onClickStartTimer}
            >
              Start
            </button>
            <button
              className="stop-btn"
              type="button"
              onClick={this.onClickStopTimer}
            >
              Stop
            </button>
            <button
              className="reset-btn"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
