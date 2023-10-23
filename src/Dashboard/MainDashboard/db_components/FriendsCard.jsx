
import axios from "axios";
import { Context } from "../../../Context/context";
import { useContext } from "react";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_BASE_URL;


function FriendsCard({user,state,setState,type}){
    const{UserToken,setUserToken}=useContext(Context)
const PENDING = type === "pending";
console.log(PENDING);
const config={
    headers:{
        token:UserToken
    }
}

const handleconfirm=async(id)=>{

    await axios.patch(`${BASE_URL}/api/accept-pending-request/${id}`,{},config).then((res)=>{ setState(!state)
        toast("Friend Request Accepted")}).catch((err)=>console.log(err))
   
}

const handleDelete=async(id)=>{


    const ans= window.confirm("Are you sure you want to remove this friend")
    if(ans){
 
     await axios.patch(`${BASE_URL}/api/cancel-pending-request/${id}`,{},config).then((res)=>{setState(!state) 
        toast("Friend Request Deleted")}).catch((err)=>console.log(err))
     
    }else{
     return
    }

}

return(
    <div className="max-w-[250px] w-full bg-light-grey shadow-lg rounded-lg my-4 flex justify-center justify-between flex-col items-center flex-wrap mt-14">
        <div className="py-4 px-6 pb-0 ">
        <img className="w-16 mx-auto -mt-8 h-16 object-cover object-center rounded-full" 
            src={PENDING ? user?.from?.image:user?.to?.image}/>
            <div className="text-center mt-6">
                <h1 className="text-2xl font-semibold break-all text-gray-800">{PENDING ? user?.from?.username :user?.to?.username  }</h1>
            </div>
        </div>
        <div className="flex items-center justify-center mt-4 text-gray-700 gap-3 pb-6">
       { PENDING &&   <button className="inline-flex rounded-md items-center gap-1 p-2 bg-orange text-sm sm:text-sm px-4 font-semibold cursor-pointer " onClick={()=>handleconfirm(user?._id)}>Confirm</button>}
            <button className="inline-flex rounded-md items-center gap-1 p-2 bg-dark-black text-sm sm:text-sm px-4 font-semibold cursor-pointer "onClick={()=>handleDelete(user?._id)}>Delete</button>
        </div>
    </div>
)
}export default FriendsCard;