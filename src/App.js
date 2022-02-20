import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const projectID = '9d3eae76-e087-45f1-a521-ec3181af4014';
function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
      <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps} />}
      onNewMessage = {()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
  );
}

export default App;
