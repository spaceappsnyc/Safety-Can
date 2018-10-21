import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import SwipeList from './SwipeList';
import CrisisAlert from './CrisisAlert';
import './Crisis.css';

class Crisis extends Component {
  state = {
    alertDismissed: false,
    tasks: [
      {
        task: 'Stay in the house',
        location: '',
        image: 'door.jpg',
        done: true
      },
      {
        task: 'Board up windows',
        location: '',
        image: 'board-up.jpg',
        done: true
      },
      {
        task: 'Turn off the power',
        location: '',
        image: 'power-off.jpg',
        done: true
      },
      {
        task: 'Get stored food and water',
        location: 'Pantry',
        image: 'pantry.jpg',
        done: true
      },
      {
        task: 'Get blankets and extra clothing',
        location: 'Closet',
        image: 'blankets.jpg',
        done: true
      },
      {
        task: 'Listen for updates from news or social media',
        location: '',
        image: 'radio.jpg',
        done: true
      },
    ],
    currentTask: 0,
    swiped: false,
  }

  handleDismissAlert = () => {
    this.setState({ alertDismissed: true });
  }

  handleListSwipe = event => {
    this.setState(prevState => ({ currentTask: prevState.currentTask + 1 }));
  }

  renderCrisisContent() {
    if (!this.state.alertDismissed) 
      return <CrisisAlert dismiss={this.handleDismissAlert} />;

    if (this.state.currentTask < this.state.tasks.length) {
      return <SwipeList 
        task={this.state.tasks[this.state.currentTask]} 
        swiped={this.handleListSwipe} 
        />;
    }

    const checklist = this.state.tasks.map(t => 
      <p style={{ color: 'green', fontSize: '16px' }}><i className={`fas ${t.done ? 'fa-check-circle' : 'fa-times-circle'}`} />{t.task}</p>
    );
    return (
      <div>
        <h3>Checklist</h3>
        <div style={{ textAlign: 'left' }}>
          <ul>
            {checklist}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='Crisis'>
        <div className='crisis-content'>
          {this.renderCrisisContent()}
        </div>
      </div>
    );
  }
}

export default Crisis;