import React, { useState } from "react";
import AllCommunities from '../Components/AllCommunities';
import JoinedCommunites from '../Components/JoinedCommunites';
import HomeNav from '../Components/HomeNav';
function Home()
    {
      
        return (
          <>
          <HomeNav/>
          
            <div className="w-screen min-h-screen pt-[149px]  bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)] ">
              <JoinedCommunites/>


              
            </div>
            </>
            
            


            
        )
    }
export default Home