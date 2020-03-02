import React from 'react';

import MessageComponent from './components/MessageComponent/MessageComponent';
import MessageListComponent from './components/MessageComponent/MessageListComponent/MessageListComponent'
import SendMessageComponent from './components/MessageComponent/SendMessageComponent/SendMessageComponent'
import ChatRoomListComponent from './components/ChatRoomComponent/ChatRoomListComponent/ChatRoomListComponent'
import ChatRoomComponent from './components/ChatRoomComponent/ChatRoomComponent'


const App = (props) => {

  return (
    <div className={"app"}>
      <h1>App</h1>
      <MessageComponent></MessageComponent>
      <MessageListComponent></MessageListComponent>
      <SendMessageComponent></SendMessageComponent>
      <ChatRoomListComponent></ChatRoomListComponent>
      <ChatRoomComponent></ChatRoomComponent>
    </div>
  )
}

export default App;
