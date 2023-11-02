import '@stream-io/stream-chat-css/dist/v2/css/index.css';
import "./chat.css"
import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Channel, ChannelHeader, ChannelList, Chat, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { Context } from '../Context/context';
import { useContext } from 'react';

      function OtoOChat(){
        const [show,setShow]=useState(true)
        const { userInfo } = useContext(Context);
        const apiKey ='5npkzfpcxuh8' ;
        let userId =userInfo?._id ;
        let userToken;
        let tokenCat=  localStorage.getItem("chatToken") || null;
        
        const chatClient = StreamChat.getInstance(apiKey);
console.log(userInfo)
        useEffect(()=>{
         
          userId =userInfo?._id ;
          if(userId && userInfo?._id){
axios.post('http://localhost:5000/api/auth/getstream',{userId}).then((res)=>{userToken=(res.data.token)
localStorage.setItem("chatToken",(res?.data?.token))
chatClient.connectUser({id:userInfo?._id,name:userInfo?.username,fullName:userInfo?.personName}, userToken)})}

  },[userInfo])
        
        const filters = { members: { $in: [userId] }, type: 'messaging' };
        const options = { limit: 10, presence: true, state: true };
        const sort = { last_message_at: -1, updated_at: -1 };

return(
  <>
  <Chat client={chatClient} theme='str-chat__theme-dark'>
  <div ><ChannelList filters={filters} options={options} showChannelSearch sort={sort} /></div>
     <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput focus />
      </Window>
      <Thread />
    </Channel> 
  </Chat>
  </>
)
}export default OtoOChat;