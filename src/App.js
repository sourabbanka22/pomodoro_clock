import React, { Component } from 'react';
import './App.css';
import Looks from './components/Looks';
import Controls from './components/Controls';
import Settings from './components/Settings';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      interval: 0,
      working: 25,
      break: 5,
      timer: {
        session: 'working',
        minutes: 25,
        seconds: 0
      }
    }
  }

  switchIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning
    });
  }

  resumeTimer = () => {
    this.pauseBeep();
    this.switchIsRunning();
    if(this.state.isRunning) {
      clearInterval(this.state.interval);
    }
    else {
      let interval = setInterval(this.clockIsRunning, 1000);
      this.setState({
        interval: interval
      })
    }
  }

  resetClock = () => {
    this.pauseBeep();
    clearInterval(this.state.interval);
    this.setState({
        isRunning: false,
        interval: 0,
        working: 25,
        break: 5,
        timer: {
          session: 'working',
          minutes: 25,
          seconds: 0
        }
    });
  }

  clockIsRunning = () => {
    let session = this.state.timer.session;
    let minutes = this.state.timer.minutes;
    let seconds = this.state.timer.seconds;

    if(seconds === 0) {
      if(minutes === 0) {
        this.playBeep();
        if(session === 'working') {
          session = 'break';
          minutes = this.state.break;
        }
        else {
          session = 'working';
          minutes = this.state.working;
        }
        seconds = 0;
      }
      else {
        minutes --;
        seconds = 59;
      }
    }
    else {
      seconds --;
    }
    this.setState({
      timer: {
        session: session,
        minutes: minutes,
        seconds: seconds
      }
    });
  }

  incWorkSession = () => {
    if(!this.state.isRunning) {
      let working = this.state.working;
      if(working >= 1 && working < 60) {
        this.setState({
          working: working + 1,
          timer: {
            session: 'working',
            minutes: working + 1,
            seconds: 0
          }
        });
      }
    }
  }
  decWorkSession = () => {
    if(!this.state.isRunning) {
      let working = this.state.working;
      if(working > 1 && working <= 60) {
        this.setState({
          working: working - 1,
          timer: {
            session: 'working',
            minutes: working - 1,
            seconds: 0
          }
        });
      }
    }
  }

  incBreakSession = () => {
    if(!this.state.isRunning) {
      let breaky = this.state.break;
      if(breaky >= 1 && breaky < 60) {
        this.setState({
          break: breaky + 1,
          timer: {
            session: 'working',
            minutes: this.state.working,
            seconds: 0
          }
        });
      }
    }
  }

  decBreakSession = () => {
    if(!this.state.isRunning) {
      let breaky = this.state.break;
      if(breaky > 1 && breaky <= 60) {
        this.setState({
          break: breaky - 1,
          timer: {
            session: 'working',
            minutes: this.state.working,
            seconds: 0
          }
        });
      }
    }
  }

  playBeep = () => {
    let audio = document.querySelector("audio");
    audio.play();
  }
  pauseBeep = () => {
    let audio = document.querySelector("audio");
    if(!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Controls 
            isRunning={this.state.isRunning} 
            resumeTimer={this.resumeTimer} 
            resetClock={this.resetClock} />
        </div>
        <div>
          <Looks 
            working={this.state.working}
            break={this.state.break}
            timer={this.state.timer} />
        </div>
        <div>
          <Settings 
            working={this.state.working}
            break={this.state.break}
            incWorkSession={this.incWorkSession}
            decWorkSession={this.decWorkSession}
            incBreakSession={this.incBreakSession}
            decBreakSession={this.decBreakSession} />

          <audio id="beep">
            <source src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav" type="audio/wav"/>
          </audio>
        </div>
      </div>
    );
  }

}

export default App;