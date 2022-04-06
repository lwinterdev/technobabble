import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class Footer extends Component {
  render() {
    return (
      <div className='bg-dark text-light'>
        
        <div>
          Made with <span className='text-info'>React</span>, <span className='text-secondary'>Bootstrap</span>, <span className='text-primary'>VsCode</span>
        </div>

        <div>
          by <span>lwinterdev</span>
        </div>

      </div>
    )
  }
}

export default Footer