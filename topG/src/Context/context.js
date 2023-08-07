import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [clubId, setClubId] = useState("");
  const [modelId, setModelId] = useState("");
  const [searchquery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
