import React from 'react'

function Incoming({message, lastMessage}) {
    const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
        {isFirstMessage && (
            <div 
                className='message-avater'
                style = {{backgroundImage: message.sender && `url(${message.sender.avatar})`}}
            />
        )}
        {message.attachments && message.attachments.length>0?
        (<img 
            src={message.attachment[0].file}
            alt='message-attachment'
            className='message-image'
            style={{marginLeft: isFirstMessage ? '4px':'48px'}}
        />):
        (<div className='message' style={{float:'left',marginLeft:isFirstMessage ? '4px':'48px',backgroundColor:'#FFB853'}}>
        {message.text}
    </div>)
        }
    </div>
  )
}

export default Incoming