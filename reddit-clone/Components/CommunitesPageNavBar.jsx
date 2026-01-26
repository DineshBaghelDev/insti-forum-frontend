import { useState } from "react"
import useForum from "./context"

function CommunitesPageNavBar()
{
    const {isOpenCP,OpenCP,CloseCP}=useForum()
    const [Joined,setJoined]=useState(false)
    return (
        <>
        <div className={`w-full h-[261px]  bg-[#FFFFFF]  z-30 top-0 right-0 flex justify-between box-border pr-[102px] transition-all duration-0 ${isOpenCP ? 'absolute':'fixed'}`}>
            <div>
            <div className="mt-[25px] w-[211px] h-[26px] mb-[43px] ml-[102px] flex">
                <img src='images/Icon.svg' className="flex mr-[5px] mb-[3px]"></img>
                <div className="w-[191px] h-[26px] font-[600] text-[20px] text-[#52BFAF]">Back to communities</div>
            </div>
            <div>
            <div className=" ml-[102px] h-[80px] w-[387px] text-[64px] font-[400] text-[#000000] text-start">Technology</div>
             <div className="pl-[5px] ml-[102px] h-[31px] w-[496px] text-[24px] font-[600] text-[#3A3636] text-start">Discussions on tech, gadgets, and innovations</div>
            <div className='flex mt-[9px]  ml-[107px]'>
                      <img src='images/person.svg '></img>
                      <div className='font-[400] text-[13px] text-[#79747E] whitespace-nowrap pt-[3px]'>1250 members</div>
            </div>
            </div>
        </div>
        {Joined ? 
        (<div className="flex gap-[15px] mt-[122px] ">
        <button onClick={()=>{setJoined(false)}} className=" h-[50px] w-[227px] bg-[#DAD7D7]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Leave Community
        </button>
        <button onClick={()=>{OpenCP()}} className=" h-[50px] w-[227px] bg-[#52BFAF]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Create Post
        </button>
        </div>):
        (
        <button onClick={()=>{setJoined(true)}}  className=" mt-[122px] h-[50px] w-[227px] bg-[#52BFAF]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Join 
        </button>   
        )}
        


        
        </div>
        </>


    )
}
export default CommunitesPageNavBar