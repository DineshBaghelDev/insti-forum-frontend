import Cards from '../Components/Cards';
import { useState } from 'react';
function AllCommunites()
{
    const [checkCommunities,SetCommunities]=useState(true)
    return(
        <>
        <div className='flex justify-between items-center w-full box-border pr-[133px] pl-[133px] mb-[33px] '>
                <div className='w-[493px] h-[50px]  bg-[#EFEBEB] rounded-[30px] flex box-border pt-[4px] pl-[2px]'>
                  <button onClick={()=>{SetCommunities(true)}} className={`w-[240px] h-[41px] rounded-[50px] font-semibold text-[24px] border-none text-center flex items-center justify-center pt-[4px] text-[#000000] transition-all duration-200 ${checkCommunities ? 'bg-[#FFFFFF] ' : 'bg-transparent '}`}>All Communities</button>
                  <button onClick={()=>{SetCommunities(false)}} className={`w-[240px] h-[41px] rounded-[50px] font-semibold text-[24px] border-none text-center flex items-center justify-center pt-[4px] text-[#000000]  transition-all duration-200 ${!checkCommunities ? 'bg-[#FFFFFF] ' : 'bg-transparent '}`}>Joined Communities</button>
                </div>
                <div className='w-[236px] h-[50px]  bg-[#52BFAF] box-border rounded-[12px] mr-[95px] flex justify-start pt-[10px] pb-[11px] pl-[11px] pr-[9px] gap-[7px]'>
                  <img src='images/Plus.svg' className="flex justify-center items-start mb-[3px]"></img>
                  <div className="font-[600] text-[22px] text-[#FFFFFF] text-center">Create Community</div>

                </div>
              </div>
              <div className='h-[34px] w-[1174px] flex justify-between bg-[#0000002E] ml-[133px] mb-[20px]'>
                <div className='font-[600] text-[16px] text-[#DAD7D7] text-center box-border pt-[6px]'>Top communities</div>
                <img src='images/play_arrow_filled.svg ' className='flex justify-center items-center'></img>
              </div>
              <div className='flex ml-[133px] '>
                <Cards/>

              </div>
              <div className="mt-[42px]">
                <div className='h-[34px] w-[1174px] flex justify-between bg-[#0000002E] ml-[133px] mb-[20px]'>
                <div className='font-[600] text-[16px] text-[#DAD7D7] text-center box-border pt-[6px]'>Explore communities</div>
                <img src='images/play_arrow_filled.svg ' className='flex justify-center items-center'></img>
              </div>
              </div>
               <div className='flex ml-[133px] '>
                <Cards/>

              </div>
        </>
    )
}
export default AllCommunites