import React from 'react';
import './styles/Controls.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RestoreIcon from '@material-ui/icons/Restore';

const Controls = (props) => {

  return (
    <div className="Controls">
      <button onClick={props.resumeTimer} id="start_stop">
        {
          props.isRunning ? <PauseCircleOutlineIcon style={{fontSize: '100px'}}/>: <PlayCircleFilledIcon style={{fontSize: '100px'}}/>
        }
      </button>
      <button onClick={props.resetClock} id="reset">
        <RestoreIcon style={{fontSize: '100px'}}/>
      </button>
    </div>
  );
  
}

export default Controls;