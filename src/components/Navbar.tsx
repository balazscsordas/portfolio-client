import Link from "next/link";
import Image from 'next/image';
import myImage from "../../public/en.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, IconButton } from "@mui/material";
import { useState } from "react";



const Navbar = () => {

    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const handleClick = () => {
        setShowMobileNavbar(prevValue => !prevValue);
    }


    return (
        <header className="uppercase font-bold  fixed top-0 w-full bg-slate-200 z-10">
            <section className="flex flex-row justify-between max-w-7xl m-auto items-center px-4">
                <div className="flex flex-row items-center">
                    <Image 
                        className="hidden sm:block rounded-full shadow-sm"
                        loading="eager"
                        src={myImage}
                        alt="my image"
                        width={50}
                        height={50}
                    />
                    <Image 
                        className="block sm:hidden rounded-full shadow-sm"
                        src={myImage}
                        alt="my image"
                        width={35}
                        height={35}
                    />
                    <Link scroll={false} href="#banner" passHref className="hidden md:block">
                        <span className="ml-3">Balazs Csordas</span>
                    </Link>
                </div>
                <div className="block sm:hidden py-4">
                    <IconButton onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                </div>
                <nav className="hidden sm:flex flex-row">
                    <Link scroll={false} className="p-8" href="/#banner">Home</Link>
                    <Link scroll={false} className="p-8" href="/#about-me">About</Link>
                    <Link scroll={false} className="p-8" href="/#projects">Projects</Link>
                    <Link scroll={false} className="p-8" href="/#contact">Contact</Link>
                </nav>
            </section>
            <Collapse in={showMobileNavbar}>
                <div className="border-t-2 border-slate-300">
                    <nav className="flex flex-col" >
                        <Link scroll={false} className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/#banner">Home</Link>
                        <Link scroll={false} className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/#about-me">About</Link>
                        <Link scroll={false} className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/#projects">Projects</Link>
                        <Link scroll={false} className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/#contact">Contact</Link>
                    </nav>
                </div>
            </Collapse>
        </header>
    )
}

export default Navbar;