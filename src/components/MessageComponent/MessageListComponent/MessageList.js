import React from 'react'
import Message from '../Message'

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]

const MessageList = (props) => {

    const messages = props.message

    return (
        <div className="message-list">
            <div className="help-text">
                {messages.map((message, index) => {
                   return (
                       <Message key={index} username={message.senderId} text={message.text} ></Message>
                   )             
                })}
            </div>
        </div>
    )
}

export default MessageList
