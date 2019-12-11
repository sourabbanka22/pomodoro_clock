import React from 'react';
import './styles/Configure.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Configure = (props) => {

    return (
      <div className="Configure">
        <label id={props.id[0]}>{props.label} session</label>

        <div className="ConfigureSession">
          <button onClick={props.increment} id={props.id[2]}>
            <ExpandLessIcon />
          </button>

          <h2 id={props.id[1]}>{props.value}</h2>

          <button onClick={props.decrement} id={props.id[3]}>
            <ExpandMoreIcon />
          </button>

        </div>
      </div>
    );

}

export default Configure;