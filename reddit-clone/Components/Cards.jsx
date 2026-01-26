import React from "react"
function Cards()
{
    return(
        <>
            <div className='h-[174px] w-[378px] bg-[#FFFFFF] rounded-[15px]  box-border flex flex-col justify-between gap-[12px] pt-[39px] pb-[25px] pl-[15px]'>
                <div className='font-[700] text-[28px] text-[#000000]'>Technology</div>
                <div className='font-[600] text-[16px] text-[#3A3636]'>Discussions on tech, gadgets, and innovations</div>
                <div className='flex justify-between box-border pr-[21px]'>
                  <div className='flex '>
                      <img src='images/person.svg'></img>
                      <div className='font-[400] text-[13px] text-[#79747E] whitespace-nowrap pt-[3px]'>1250 members</div>
                  </div>
                  <button className='w-[49px] box-border pb-[15px]  h-[14px] bg-[#52BFAF] text-center text-[12px] text-[#FFFFFF] font-[600] '>Join</button> 

                </div>

              </div>
        </>
    )
}
export default Cards