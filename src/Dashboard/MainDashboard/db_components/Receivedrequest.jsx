import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Context } from "../../../Context/context";
import { useContext } from "react";

import FriendsCard from "./FriendsCard";
const BASE_URL = process.env.REACT_APP_BASE_URL;
 
function Receivedrequest(){
    const{UserToken,setUserToken}=useContext(Context)
const[pendingRequest,setPendingRequest]=useState([])
const [state,setState]=useState(false)

const config={
    headers:{
        token:UserToken
    }
}

useEffect(()=>{
    if(UserToken){
        getapi();
    }

},[UserToken,state])


const getapi=async()=>{
  
    const {data}= await axios.get(`${BASE_URL}/api/pending-requests/`,config)
 
    setPendingRequest(data)
}



    return (

        <div className="bg-black py-8 px-6 rounded-2xl h-full">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10">Friend requests</h3>
            <div className="flex flex-wrap gap-4">

   {pendingRequest?.map((user,i)=>{ return <FriendsCard key={i} user={user} state={state} type={"pending"} setState={setState}/>})}


   
</div>
        </div>
        
    )
}export default Receivedrequest;