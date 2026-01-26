function CommunitiesCard()
{
    return(
        <>
        <div className="ml-[118px] w-[1198px] h-[174px] rounded-[20px] bg-[#FFFFFF] pt-[28px]  "> 
            <div className="w-[903px] h-[38px] font-[700] text-[34px] text-[#000000] ml-[34px]">What are your thoughts on the latest AI developments ?</div>           
            <div className="w-[1067px] h-[52px] font-[600] text-[20px] ml-[34px] text-[#726F6F] mt-[5px]">I've been following the recent AI advancements and I'm curious about everyone's perspective on how this will impact our daily lives.</div>
            <div className="flex justify-between mt-[5px] ml-[34px] mr-[39px]">
                <div className="w-[236px] h-[26px] font-[400] text-[20px] text-[#787272]">Posted by u/tech_enthusiasts</div>
                <div className="flex w-[161px] h-[26px]">
                    <img src='images/comment.svg'></img>
                    <div className="w-[137px] h-[26px] font-[400] text-[20px]  text-[#787272]">View Comments</div>
                </div>
            </div>

        </div>

        </>
    )
}
export default CommunitiesCard