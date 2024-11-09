// Add this line at the top
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';


const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    {
        name: "About",
        path: "/about",
    },
];

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32-px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-10 mb-40 text-center text-2xl">
                    <Link href="/"> <h1 className="text-4xl font-semibold">Razzak <span className="text-accent">.</span></h1>  </Link>
                </div>
                <nav className="flex flex-col -mt-20 justify-center items-center gap-4">
                    {links.map((link, index) =>{
                     return <Link key={index} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
