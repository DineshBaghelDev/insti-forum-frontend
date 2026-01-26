import CommunitesPageNavBar from "./CommunitesPageNavBar"
import CommunitiesCard from "./CommunitiesCard"
import useForum from "./context"
import CreatePost from "./CreatePost"
function CommunitiesPage()
{
    const {isOpenCP,OpenCP,CloseCP}=useForum()
    return(<>
    {
            isOpenCP && <CreatePost/>
    }
        <CommunitesPageNavBar/>
        <div className="w-screen min-h-screen pt-[328px]  bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)]">
            <div className="flex flex-col gap-[74px]">
                <CommunitiesCard/>
                <CommunitiesCard/>
            </div>
        
        </div>
        </>
    )
}
export default CommunitiesPage