import Cards from '../Components/Cards';

function AllCommunites()
{
    
    return(
        <>
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