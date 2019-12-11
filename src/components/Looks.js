import React from 'react';
import './styles/Looks.css';

const Looks = (props) => {
    
    return (
      
        <div className="clock">
            <p className="text" id="timer-label">{ props.timer.session }</p>
            <h2 className="time" id="time-left">
              {props.timer.minutes >= 10 ? props.timer.minutes : `0${props.timer.minutes}`}
              :
              {props.timer.seconds >= 10 ? props.timer.seconds : `0${props.timer.seconds}`}
            </h2>
        </div>
      
    );
    
}

export default Looks;