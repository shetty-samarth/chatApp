import React from 'react'
import Incoming from './Incoming';
import MessageForm from './MessageForm';
import Outgoing from './Outgoing';

function ChatFeed(props) {
  const {chats, messages, activeChat, userName} = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
      const keys = Object.keys(messages);

      return keys.map((key,index) => {
         const message = messages[key];
         const lastKey = index === 0 ? null : keys[index-1]; 
         const isOutgoing = userName === message.sender.userName;

         return(
             <div key={index} style = {{width: '100%'}}>
                 <div className="message-block">
                     {
                         isOutgoing? <Outgoing message={message}/> : 
                         <Incoming message={message} lastMessage = {messages[lastKey]}/>
                     }
                 </div>
                 <div className="read-reciepts" style={{marginRight: isOutgoing? '18px':'0px', marginLeft:isOutgoing? '0px':'68px'}}>

                 </div>
             </div>
         )
    })
  }
  return (
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle"></div>
            {renderMessages()}
            <div style={{height:'100px'}}>
                <div className="message-form-container">
                    <MessageForm {...props} chatID = {activeChat} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatFeed