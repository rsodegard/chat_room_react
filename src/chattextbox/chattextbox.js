import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBoxComponent extends React.Component {


  constructor(){
    super();
    this.state = {
      chatText: ''
    };
  }

  render (){

    const { classes } = this.props;

    return(
    <div className={classes.chatTextBoxContainer}> 
      <TextField placeholder='Type your message here...' onKeyUp={(e) => this.userTyping(e)} id='chattextbox' className={classes.chatTextBox} onFocus={this.userClickedInput}></TextField>
      <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
    </div>
    );
  }

  // typing in the input, with enter key code 13 : updating state as typing 
  userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({ chatText: e.target.value });

  // make sure message not empty (find all the space characters and repalce with empty space, then check for length, so that you cant submit empty space) if it the case that one of two bad exist, then we want messageValid false, which is what this checks for.
  messageValid = (txt) => txt && txt.replace(/\s/g, '').length;

  // send button
  submitMessage = () => {
    // check if message valid and return empty string into box on submit
    if(this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById('chattextbox').value = '';
    }
  }

  // clicked on the type message area
  userClickedInput = () => console.log('clicked input');
  

}

export default withStyles(styles)(ChatTextBoxComponent);