import React, {useState} from 'react'


const SendMessageForm = (props) => {

    const [message, setMessage] = useState('')

    const handleChange = event => {
        const {value} = event.target
        console.log(value)
        setMessage(value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.sendMessage(message)
        setMessage('')

        console.log(message)
    }
   
    return (
        <form 
        onSubmit={handleSubmit}
        className="send-message-form">
            <input
                onChange={handleChange}
                value={message}
                placeholder="SendMessageForm"
                type="text" />
        </form>
    )
    
}

export default SendMessageForm