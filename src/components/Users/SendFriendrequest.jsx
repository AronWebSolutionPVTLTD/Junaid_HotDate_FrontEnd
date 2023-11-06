import { useEffect, useState } from "react";
import api from "../../utils/api";
import FriendsCard from "../Friends/FriendsCard";

function SendFriendrequest(){

 
const [sendreuest,setSendRequest]=useState([])
    const [state,setState]=useState(false)

    useEffect(()=>{
    getapi()
 },[state])
    
   
const getapi=async()=>{
    await api.get(`/outgoing-requests`).then((res)=>setSendRequest(res.data)).catch((err)=>console.log(err))
}



return(
    <div className="bg-black py-8 px-6 rounded-2xl h-full">
    <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10 underline">Sent Friend Requests</h3>
    <div className="flex flex-wrap gap-4">
   

     
{sendreuest.length===0 ? <p>No requests found</p> :sendreuest?.map((user,i)=>(
<FriendsCard user={user} state={state} setState={setState} />
))}
</div>
</div>
)
}export default SendFriendrequest;