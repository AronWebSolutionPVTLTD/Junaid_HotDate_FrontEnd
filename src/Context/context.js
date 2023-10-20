import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [clubId, setClubId] = useState("");
  const [modelId, setModelId] = useState("");
  const [eventId, setEventId] = useState("");
  const [searchquery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [verifyemail, setverifyEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [UserToken,setUserToken] = useState("")
  const [savedCred,setSavedCred]=useState({long:"",lat:""})
  const [travelid,setTravelid]=useState('')

  return (
    <Context.Provider
      value={{
        UserToken,
        setUserToken,
        userInfo,
        setUserInfo,
        clubId,
        setClubId,
        modelId,
        setModelId,
        searchquery,
        setSearchQuery,
        search,
        setSearch,
        eventId,
        setEventId,
        verifyemail,
        setverifyEmail,
        userId,
        setUserId,
        savedCred,setSavedCred,
        travelid,setTravelid
      }}
    >
      {children}
    </Context.Provider>
  );
};
