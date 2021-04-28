import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HomeSection from "../components/HeroSection";

function Home() {
    const [isOpen, setIsOpen] = useState();
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HomeSection />
        </>
    )
}

export default Home
