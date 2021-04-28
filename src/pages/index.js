import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
    const [isOpen, setIsOpen] = useState();
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
        </>
    )
}

export default Home
