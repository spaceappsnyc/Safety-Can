import React from 'react';
import Hammer from 'react-hammerjs';

const SwipeList = props => {
  const picture = require(`../../assets/images/${props.task.image}`);

  return (
    <div style={{ width: '100%' }}>
      <h1>{props.task.task}</h1>
      {props.task.location ? <h2>WHERE: {props.task.location}</h2> : null}
      <Hammer onSwipe={props.swiped}>
        <img src={picture} alt='Task' style={{ width: '100%', height: 'auto' }}/>
      </Hammer>
    </div>
  );
};

export default SwipeList;