import React from "react";
import img1 from '../assets/homepage.jpg'
import Hero from "../components/Hero/Hero";
import AllSponsers from "../components/AllSponsers";
import { HotelsCard } from "../components/HotelsCard";
const Home = () => {
    return (<>
    <AllSponsers/>
    <HotelsCard/>
    </>   );

}
             
export default Home