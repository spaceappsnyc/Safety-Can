import React from 'react';
import { Button } from 'react-bootstrap';

import hurricaneImg from '../../assets/images/hurricane.jpeg';

const CrisisAlert = props => {
  return (
    <div className='CrisisAlert'>
      <h1>
        <i className='fas fa-exclamation-triangle'  style={{ color: 'red' }} /> 
        HURRICANE
      </h1>
      <img 
        src={hurricaneImg} 
        alt='Disaster' 
        style={{ width: '100%', height: 'auto', marginBottom: '20px'}} 
        />
      <div>
        <Button bsStyle='info' bsSize='large' block>Tell me more</Button>
        <Button 
          bsStyle='success' 
          bsSize='large' 
          block
          onClick={props.dismiss}>
            Tell me what to do</Button>
      </div>
    </div>
  );
};

export default CrisisAlert;