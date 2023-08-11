import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [clubId, setClubId] = useState("");
  const [modelId, setModelId] = useState("");
  const [eventId, setEventId] = useState("");
  const [searchquery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [refreshModel, setRefreshModel] = useState(false);
  return (
    <Context.Provider
      value={{
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
