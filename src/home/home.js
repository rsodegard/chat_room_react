import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './styles';
// import { withStyles } from '@material-ui/core';
import './App.css';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div>
          <h1 className='x-large text-center m-0 idler'>CloudChat</h1>

          <div className='landing-inner large card'>
            <p className='lead'>
              {' '}
              The Clean Chat Solution for the Environment.{' '}
            </p>
            <div className='flexy-container'>
              <Link to='/login' className='btn btn-dark right'>
                Log In
              </Link>{' '}
              <Link to='/signup' className='btn btn-dark left'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

// export default withStyles(styles)(HomeComponent);

// need to figure out how to conditionally render this in app.js so that it does still appear on all of the pages.
