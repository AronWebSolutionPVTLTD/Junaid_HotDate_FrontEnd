import React, { useContext, useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat,Channel,ChannelHeader,MessageList,MessageInput,Window, Thread } from 'stream-chat-react';

import '@stream-io/stream-chat-css/dist/css/index.css';
import { Context } from '../Context/context';
import 'stream-chat-react/dist/css/v2/index.css';

import axios from 'axios';
import { toast } from 'react-toastify';

      function OtoOChat(){

        const BASE_URL = process.env.REACT_APP_BASE_URL;
        const {userInfo}=useContext(Context)
        // const [chatClient, setChatClient] = useState(null);
const[token,setToken]=useState(null)
      
const apiKey="5npkzfpcxuh8";

const chatClient = StreamChat.getInstance(apiKey);


useEffect(() => {
  if(userInfo){
    streamapi()
  }
}, []);

const streamapi=async()=>{
await axios.post(`${BASE_URL}/api/auth/getstream`, { userId: `${userInfo._id}`})
.then((response) => {
  // const chatClient = new StreamChat(response.data.token, { apiKey: apiKey });
  // setChatClient(chatClient);
  setToken(response.data.token)

})
.catch((error) => {
  console.error('Error authenticating with GetStream.io:', error);
});
}

let channel;
useEffect(() => {
    const setupClient = async () => {
      try {
        console.log("Token:", token);
      console.log("UserInfo:", userInfo);
      
        if (token && userInfo && userInfo._id) {
          await chatClient.connectUser({
            id: userInfo._id,
            name: userInfo.username,
           
            image: userInfo.image,
          }, token);
          channel = chatClient.channel('messaging', 'react-talk', {
            image: 'images/couple-avatar.jpg',
            name: 'Talk about React',
            members: [userInfo._id],
          });
        }else{
          toast('data not found')
        }
         
      } catch (error) {
        console.error("Error setting up client and channel:", error);
        // Handle the error or display an error message to the user.
      }
    };

    setupClient();
  }, [ token]);

return(
  <>
  <h1>One to One</h1>
  <Chat client={chatClient} theme='messaging light'>
          <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>  
  </>
)
}export default OtoOChat;