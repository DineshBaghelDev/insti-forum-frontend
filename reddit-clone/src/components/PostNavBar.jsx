import useForum from "./context"

function PostNavBar()
{
    const {isOpenCP,OpenCP,CloseCP}=useForum()
    return(
        <>
        <div className={`w-full h-[87px]  bg-[#FFFFFF] fixed z-50 top-0 right-0 flex justify-between box-border pr-[102px] `}>
            <div className="mt-[28px] w-[211px] h-[26px] ml-[102px] flex">
                <img src='/images/Icon.svg' className="mr-[16px]"></img>
                <div className=" mt-[1px] w-[191px] h-[26px] font-[600] text-[20px] text-[#52BFAF]">Back to Technology</div>
            </div>
        </div>
        
        </>
    )
}
export default PostNavBar
