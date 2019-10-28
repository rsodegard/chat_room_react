import React from 'react';
import ChatListComponent from '../chatlist/chatlist';
import { Button, withStyles } from '@material-ui/core';
import styles from './styles';
import ChatViewComponent from '../chatview/chatview';
import ChatTextBoxComponent from '../chattextbox/chattextbox';
const firebase = require('firebase');

class DashboardComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
  }

  render(){

    const { classes } = this.props;


    return(
     <div>
      <ChatListComponent 
      history={this.props.history} 
      userEmail={this.state.email} 
      newChatBtnFn={this.newChatBtnClicked} 
      selectChatFn={this.selectChat} 
      chats={this.state.chats}  
      selectedChatIndex={this.state.selectedChat}></ChatListComponent>
      {
        this.state.newChatFormVisible ? 
        null : 
        <ChatViewComponent user={this.state.email} chat={this.state.chats[this.state.selectedChat]} ></ChatViewComponent>
      }
      {
        this.state.selectedChat !== null && !this.state.newChatFormVisible ?
          <ChatTextBoxComponent submitMessageFn={this.submitMessage} ></ChatTextBoxComponent> :
        null
      }
      
      <Button className={classes.signOutBtn} onClick={this.signOut}>Sign Out</Button>
     </div>
      
      );
  }

  signOut = () => firebase.auth().signOut();

  selectChat = (chatIndex) => {
    this.setState({ selectedChat: chatIndex });
  }

  // grab the friend by finding 0 index of selected chat + not the _usr.
  submitMessage = (msg) => {
    const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0]);
    firebase
      .firestore()
      .collection('chats')
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  } 

  // build key like in firebase user1:user2 strign alphabetical
  buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null })
    
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if(!_usr)
        this.props.history.push('/login');
      else {
        await firebase 
          .firestore()
          .collection('chats')
          // allows us to query
          .where('users', 'array-contains', _usr.email)
          .onSnapshot(async res => {
            // the issue you encountered here was not calling the function data below
            const chats = res.docs.map(_doc => _doc.data());
            // setState is asyncronus in react
            await this.setState({
              email: _usr.email,
              chats: chats
            });
            console.log(this.state);
          })
      }
    })
  }
}

export default withStyles(styles)(DashboardComponent);