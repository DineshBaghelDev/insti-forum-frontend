import { createContext, useContext } from "react";

export const ForumContext=createContext(
    {
        totalCommunities:'0',
        cards:[{}],

    }
)
export const ForumProvider=ForumContext.Provider()
export const useForum=()=>{
    return useContext(ForumContext)
}    