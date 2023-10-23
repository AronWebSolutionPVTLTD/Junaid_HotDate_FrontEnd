import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../../Context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function MyFriends(){
const navigate=useNavigate();
const [allfriends,setAllFriends]=useState([])
const [state,setState]=useState(false)
const{UserToken,userInfo}=useContext(Context)
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
  await axios.get(`${BASE_URL}/api/all-friends`,config).then((res)=>setAllFriends(res.data)).catch((err)=>console.log(err))
}

const handleViewProfile=(id)=>{

navigate(`/user-detail/${id}`)
}


const handleDelete=async(id)=>{
   const ans= window.confirm("Are you sure you want to remove this friend")
   if(ans){
    console.log(id)
await axios.patch(`${BASE_URL}/api/cancel-pending-request/${id}`,{},config).then((res)=>{setState(!state) 
        toast("Friend Request Deleted")}).catch((err)=>console.log(err))
    
   }else{
    return
   }
}
    

return(
    <>
      <div className="bg-black py-8 px-6 rounded-2xl h-full">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10">My Friends</h3>
            <div className="flex flex-wrap gap-4">
    {allfriends.map((el,i)=>
    <div className="max-w-[250px] w-full bg-light-grey shadow-lg rounded-lg my-4 flex justify-center justify-between flex-col items-center flex-wrap mt-14">
     
    <div className="py-4 px-6 pb-0 " key={i}>
     
    <img className="w-16 mx-auto -mt-8 h-16 object-cover object-center rounded-full" 
        src={el.from._id===userInfo._id ? el?.to?.image: el.to._id===userInfo._id && el?.from?.image}/>
        <div className="text-center mt-6">
            <h1 className="text-2xl font-semibold break-all text-gray-800">{el.from._id===userInfo._id ? el?.to?.username: el.to._id===userInfo._id && el?.from?.username}</h1>
        </div>
   
    </div>
     
    <div className="flex items-center justify-center mt-4 text-gray-700 gap-3 pb-6">
   
        <button className="inline-flex rounded-md items-center gap-1 p-2 bg-white  text-black text-sm sm:text-sm px-4 font-semibold cursor-pointer " onClick={()=>handleViewProfile(el.from._id===userInfo._id ? el?.to?._id: el.to._id===userInfo._id && el?.from?._id) }>View Profile</button>
        <button className="inline-flex rounded-md items-center gap-1 p-2 bg-red text-sm sm:text-sm px-4 font-semibold cursor-pointer " onClick={()=>handleDelete(el?._id) }>Delete</button>
    </div>
</div>
)}
</div>
        </div>
</>
)
}

export default MyFriends;