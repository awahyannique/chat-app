import React, { useEffect, useState, Component } from 'react'
import './App.css';
import MessageList from './components/MessageComponent/MessageListComponent/MessageList'
import SendMessageForm from './components/MessageComponent/SendMessageFormComponent/SendMessageForm'
import RoomList from './components/RoomComponent/RoomListComponent/RoomList'
import NewRoomForm from './components/RoomComponent/NewRoomFormComponent/NewRoomForm'

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';


// const url = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a5d860db-4a58-472b-a2be-199edbaae72d/token'
const instanceLocator = 'v1:us1:a5d860db-4a58-472b-a2be-199edbaae72d'

const roomId = 'd340fb5a-55e4-425f-8ad2-5221d0d0167a'

const tokenProvider = new TokenProvider({
    url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a5d860db-4a58-472b-a2be-199edbaae72d/token"
});

const userId = "ChatAppAdminUser"

class App extends Component {

  // state = {
  //   message: []
  // }

  constructor() {
    super()
    this.state = {
        message: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  } 

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userId,
      tokenProvider
    });

    chatManager
    .connect()
      .then(currentUser => {
        this.currentUser = currentUser
        console.log("Connected to Chatkit")

        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(error => console.log('error on joinableRooms: ', error))
        
        this.currentUser.subscribeToRoom({
          roomId,
          hooks: {
            onMessage: message => {
              this.setState({
                message: [...this.state.message, message]
              })
              console.log("Received message:", message)
            }
          }
        });
      })
      .catch(error => {
        console.error("error:", error);
      })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId
    })
  }

  render() {
    return (
        <div className="app">
            <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
            <MessageList message={this.state.message} />
            <SendMessageForm sendMessage={this.sendMessage} />
            <NewRoomForm />
        </div>
    );
  }

}

export default App

