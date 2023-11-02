import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { calculateAge } from "../../../LandingPage/Pages/CalculateAge";
import { Context } from "../../../Context/context";
import { useNavigate } from "react-router-dom";
const BASE_URL=process.env.REACT_APP_BASE_URL
function CurrentlyOnUser(){
    const {userInfo}=useContext(Context)
    const [user, setuser] = useState([])
const[loading,setLoading]=useState(false)
const navigate=useNavigate()

    useEffect(() => {
        setLoading(true)
        getapi()
    }, [])
    



    const getapi = async () => {
try{ 
    setLoading(false)
    const { data } = await axios.get(`${BASE_URL}/api/active_users`)

const fiterdData=data?.users?.filter((el)=>el?._id!==userInfo?._id)

setuser(fiterdData)

}catch(err){
console.log(err)
}

       
    }


    const handledetail=(id)=>{
        navigate(`/user-detail/${id}`)
    }



    return (
        <div className="bg-black py-8 px-6 rounded-2xl h-full">
            {!loading?
   
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
            {user?.map((user) => (


                <div
                    className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap"
onClick={()=>handledetail(user?._id)}
                >
                    <div className="w-[35%]">


                        <img
                            className="w-full object-cover h-full aspect-11/10 rounded-2xl"
                            src={user?.image}
                    
                        />
                    </div>
                    <div className="w-[65%] px-4 pr-0 grid content-between relative gap-2">
                
                             <div className="flex flex-wrap sm:flex-nowrap justify-between sm:gap-5">
             <h3 className="flex items-start text-lg sm:text-xl font-medium font-body_font w-full">
               <p className="w-[75%] break-all">{user?.username}</p>
               <p className="w-[70px] pl-2 flex flex-wrap items-center text-xs mt-[6px] font-light gap-1">
                 <span className="block w-2 h-2 rounded-full bg-green-500 font-body_font"></span>
                 Online
               </p>
             </h3>
           
           </div>
                        <div className="flex justify-between items-center">


                            <div className="flex justify-between items-center">
                                <div className="text-[12px] gap-1 flex items-center">
                                    <span className={user?.gender === "male" ? "text-[#3A97FE]" : user?.gender === "female" ? "text-[#FF2A90]" : "text-[#cf00cf]"}>
                                
                                        {user?.profile_type === "single" && calculateAge(user?.DOB)}
                                    </span>
                                    {user?.profile_type === "couple" && (
                                        <>
                                            <span className={user?.couple?.person1?.gender === "male" ? "text-[#3A97FE]" : user?.couple?.person1?.gender === "female" ? "text-[#FF2A90]" : "text-[#cf00cf]"}>
                                                {calculateAge(user?.couple?.person1?.DOB)}
                                            </span>
                                            |
                                            <span className={user?.couple?.person2?.gender === "male" ? "text-[#3A97FE]" : user?.couple?.person2?.gender === "female" ? "text-[#FF2A90]" : "text-[#cf00cf]"}>
                                                {calculateAge(user?.couple?.person2?.DOB)}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>




                       

                            <div className="flex flex-wrap gap-1">
                                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
                                    <img
                                        src="images/desk_icon.png"
                                        alt="desk_icon"
                                        className="max-w-full"
                                    />
                                </span>
                         
                            </div>
                        </div>

                        <div>
                                <span>{user?.profile_type === "single" ? (
                                    <div>
                                        {user?.gender === "male" ?
                                            <img src="images/Male.png" className="h-[25px]" /> : user?.gender === "female" ? <img className="h-[25px]" src="images/Female.png " /> : <img className="h-[22px]" src="images/Trans.png" />}
                                    </div>
                                ) : (
                                    <div className="flex">
                                        {user?.couple?.person1?.gender === "male" ? <img className="h-[25px]" src="images/Male.png" /> : user?.couple?.person1?.gender === "female" ? <img className="h-[25px]" src="images/Female.png" /> : <img className="h-[22px]" src="images/Trans.png" />}|
                                        {user?.couple?.person2?.gender === "male" ? <img className="h-[25px]" src="images/Male.png" /> : user?.couple?.person2?.gender === "female" ? <img className="h-[25px]" src="images/Female.png" /> : <img className="h-[22px]" src="images/Trans.png" />}
                                    </div>
                                )
                                }</span>
                            </div>

                 
                        <p className="travel_desc text-sm font-body_font">{user?.slogan}</p>
                    </div>
                </div>
            ))}
        </div>
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
    )
}export default CurrentlyOnUser;