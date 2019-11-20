import React from 'React';

import '../styles/stop-watch.css';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      elapsed: 0,
      lastTick: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.running) {
      let now = Date.now();
      console.log(this.interval);

      let diff = now - this.state.lastTick;

      this.setState({
        elapsed: this.state.elapsed + diff,
        lastTick: now
      });
    }
  }

  handleStart() {
    this.setState({
      running: true,
      lastTick: Date.now()
    });
  }

  handlePause() {
    this.setState({ running: false });
  }

  handleStop() {
    this.setState({
      running: false,
      elapsed: 0,
      lastTick: 0,
    });
  }

  format(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
  }

  render() {
    let time = this.format(this.state.elapsed);

    return(
      <section className="stop-watch">
        <div className="stop-watch__time">{time}</div>
        <div className="stop-watch__controls">
          {this.state.running ?
            <div className="stop-watch-control" onClick={this.handlePause}>
              <span>Pause</span>
            </div>
            :
            <div className="stop-watch-control" onClick={this.handleStart}>
              <span>Start</span>
            </div>
          }
          <div className="stop-watch-control" onClick={this.handleStop}>
            <span>Stop</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Stopwatch;
