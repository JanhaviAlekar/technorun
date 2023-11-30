import React from "react";
import SponsorsCard from "./sponsorsCard";
const AllSponsers =() =>{
    return(<>
            <div className="grid-container">
            <div className="grid-item">
            <div className="container-card">
           <SponsorsCard/>
           <SponsorsCard/>
            </div>
            </div>
            </div>
            </> 
            );
}
export default AllSponsers;