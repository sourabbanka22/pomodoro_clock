import React from 'react';
import './styles/Settings.css';
import Configure from './Configure';

const Settings = (props) => {

    return (
      <div className="Settings">
        <Configure
          id={['session-label', 'session-length', 'session-increment', 'session-decrement']}
          label="working"
          value={props.working}
          increment={props.incWorkSession}
          decrement={props.decWorkSession} />
        <Configure
          id={['break-label', 'break-length', 'break-increment', 'break-decrement']}
          label="break"
          value={props.break}
          increment={props.incBreakSession}
          decrement={props.decBreakSession} />
      </div>
    );

}

export default Settings;