import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './styles';
// import { withStyles } from '@material-ui/core';
import styles from './styles';
import './App.css';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div>
          <h1 className='x-large text-center m-0 idler'>
            TitanChat | Welcome!
          </h1>

          <div className='landing-inner large card'>
            <p className='lead'>
              {' '}
              Our servers send messages out to Titan, wrapping around its polar
              caps, and retreating to earth just in time to link you with your
              designated friend. Just click Sign Up, then log in, and type in
              your friend's email, and a message to send. Click enter, and you
              will have sent a transmission to Titan.{' '}
            </p>
            <div className='flexy-container'>
              <Link to='/login' className='btn btn-dark right'>
                Login
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
