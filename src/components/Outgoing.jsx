import React from 'react'

function Outgoing({message}) {
    if(message.attachments && message.attachments.length>0){
        return(
            <img 
                src={message.attachment[0].file}
                alt='message-attachment'
                className='message-image'
                style={{float:'right'}}
            />
        );
    }
  return (
    <div className='message' style={{float:'right',marginRight:'18px', backgroundColor:'#00FFFF'}}>
        {message.text}
    </div>
  )
}

export default Outgoing