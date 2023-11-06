import { useEffect, useState } from "react";

import api from "../../utils/api";
import FriendsCard from "../Friends/FriendsCard";
function Receivedrequest(){
const[pendingRequest,setPendingRequest]=useState([])
const [state,setState]=useState(false)

useEffect(()=>{
  getapi();
},[state])

const getapi=async()=>{
 await api.get(`/pending-requests`).then((res)=>setPendingRequest(res.data)).catch((err)=>console.log(err))
}



    return (

        <div className="bg-black py-8 px-6 rounded-2xl h-full">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10 underline">Recieved Friend Requests</h3>
            <div className="flex flex-wrap gap-4">

   {pendingRequest.length===0 ? <p>No requests found</p> :pendingRequest?.map((user,i)=>{ return <FriendsCard key={i} user={user} state={state} type={"pending"} setState={setState}/>})}


   
</div>
        </div>
        
    )
}export default Receivedrequest;