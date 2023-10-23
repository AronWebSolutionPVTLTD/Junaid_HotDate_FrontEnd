import { useEffect } from "react";
import { Context } from "../../../Context/context";
import { useContext } from "react";
import axios from "axios";
import FriendsCard from "./FriendsCard";
import { useState } from "react";


const BASE_URL = process.env.REACT_APP_BASE_URL;
function SendFriendrequest(){
const [sendreuest,setSendRequest]=useState([])
    const{UserToken,setUserToken}=useContext(Context)
    const [state,setState]=useState(false)

    useEffect(()=>{
if(UserToken){
    getapi()
}
    },[UserToken,state])
    
    const config={
        headers:{
            token:UserToken
        }
    }
const getapi=async()=>{
    await axios.get(`${BASE_URL}/api/outgoing-requests`,config).then((res)=>setSendRequest(res.data,"ggg")).catch((err)=>console.log(err))
}

return(
    <div className="bg-black py-8 px-6 rounded-2xl h-full">
    <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10">Friend requests</h3>
    <div className="flex flex-wrap gap-4">

{sendreuest?.map((user,i)=>(
<FriendsCard user={user} state={state} setState={setState}/>
))}



</div>
</div>
)
}export default SendFriendrequest;