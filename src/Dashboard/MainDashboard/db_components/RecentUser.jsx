

import axios from "axios";
import { useEffect, useState } from "react";
import { GrStar } from "react-icons/gr";
import { calculateAge } from "../../../LandingPage/Pages/CalculateAge";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function RecentUser() {
    const [user, setuser] = useState([])

    useEffect(() => {
        getapi()
    }, [])

    const getapi = async () => {
        const { data } = await axios.get(`${BASE_URL}/api/search_user`)

        setuser(data)

    }




    console.log(user, "data")
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
            {user?.map((user) => (


                <div
                    className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2"

                >
                    <div className="w-2/5 sm:w-full">


                        <img
                            className="w-full object-cover h-full aspect-11/10 rounded-2xl"
                            src={user?.image}
                    
                        />
                    </div>
                    <div className="w-3/5 sm:w-full px-4 pr-0 grid content-between relative gap-2">
                        <div className="flex items-center gap-1 text-xs">
                       
                            <p className="text-[12px] font-medium text-bright-orange">
                                {user?.username}
                            </p>
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
    )
} export default RecentUser;