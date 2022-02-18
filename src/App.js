import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
function App() {
  return (
    <div className="App">
      <ChatEngine 
      height="100vh"
      projectID="9d3eae76-e087-45f1-a521-ec3181af4014"
      userName="sam"
      userSecret="qwerty"
      renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps} />}
      onNewMessage = {()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
