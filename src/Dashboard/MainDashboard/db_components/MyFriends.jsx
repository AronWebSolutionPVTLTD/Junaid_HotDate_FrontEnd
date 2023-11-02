import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../../Context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmPopUP from "./ConfirmPopUP";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function MyFriends(){
const navigate=useNavigate();
const [allfriends,setAllFriends]=useState([])
const [state,setState]=useState(false)
const[loading,setLoading]=useState(false)
const{UserToken,userInfo}=useContext(Context)
const config={
    headers:{
        token:UserToken
    }
}

const [popup, setPopup] = useState(false)
const[deleteId,setDeleteId]=useState(null)

useEffect(()=>{
    if(UserToken){
        setLoading(true)
        getapi();
    }

},[UserToken,state])

const getapi=async()=>{
  await axios.get(`${BASE_URL}/api/all-friends`,config).then((res)=>{setAllFriends(res.data) 
    setLoading(false)}).catch((err)=>console.log(err))
}

const handleViewProfile=(id)=>{

navigate(`/user-detail/${id}`)
}


const handleDelete=async(id)=>{
    setPopup(true)
    setDeleteId(id)
}
    
const handleDeleteConfirm=async()=>{

    await axios.patch(`${BASE_URL}/api/cancel-pending-request/${deleteId}`,{},config).then((res)=>{setState(!state) 
        setPopup(false);
                toast("Friend Request Deleted")}).catch((err)=>console.log(err))

}

return(
    <>
      <div className="bg-black py-8 px-6 rounded-2xl h-full">
        {!loading?
        <>
            <h3 className="text-2xl sm:text-5xl leading-none font-bold mb-10 text-center">My Friends</h3>
            <div className="flex flex-wrap gap-4">
    {allfriends.map((el,i)=>
    <div className="max-w-[250px] w-full bg-light-grey shadow-lg rounded-lg my-4 flex justify-center justify-between flex-col items-center flex-wrap mt-[10px]">
     
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
<ConfirmPopUP handleDeleteConfirm={handleDeleteConfirm} popup={popup} setPopup={setPopup}/>
</>
:
<div className="w-full min-h-screen text-3xl flex items-center justify-center">
<div className="transform -translate-y-[90px]">
<svg aria-hidden="true" role="status" class="inline mr-3 w-10 h-10 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
</svg>
Loading...
</div>
</div>}
        </div>

        
</>
)
}

export default MyFriends;