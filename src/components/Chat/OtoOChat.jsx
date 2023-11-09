import "stream-chat-react/dist/css/index.css";
import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import "./chat.css"
import { Channel, ChannelHeader, ChannelList, Chat, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useSelector } from "react-redux";


      function OtoOChat(){
        
const {user} = useSelector((state)=>state.auth);
const [userInfo,setUserInfo]=useState(user);
useEffect(()=>{
  setUserInfo(user)
},[])
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
    <Chat client={chatClient} theme="messaging dark">
      <ChannelList filters={filters} sort={sort} options={options} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList  />
          <MessageInput autoFocus={true} />
        </Window>
        <Thread
        />
      </Channel>
    </Chat>
  </>
)
}export default OtoOChat;