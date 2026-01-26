import { createContext, useContext } from "react";

export const ForumContext=createContext(
    {
        checkCommunites:true,
        setAllCom:()=>{},
        setJoinedCom:()=>{},
        usercommunites:[{}],
        isOpenCC:false,
        OpenCC:()=>{},
        CloseCC:()=>{},
        isOpenCP:false,
        OpenCP:()=>{},
        CloseCP:()=>{},
        

        
        

    }
)
export const ForumProvider=ForumContext.Provider
export default function useForum(){
    return useContext(ForumContext)
}    