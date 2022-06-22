import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listMenu = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Residence", href: "/residence" },
    { name: "Gallery", href: "/gallery" },
    { name: "Service", href: "/service" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const router = useRouter();

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseIn = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    // const handleMouseOut = () => setTimeout(() => setHover(false), 2000);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };


    return (
        <>
            <div className="fixed top-0 h-16 w-full flex justify-center bg-[#010F2A] z-20">
                <div className="max-w-7xl w-full h-full px-2 lg:px-10 flex justify-between ">
                    <div className="lg:hidden">

                        <div
                            id="menu"
                            className={navbarOpen ? "menu open " : "menu "}
                        >
                            <span className="menu-circle"></span>
                            <button
                                id="hamburgerBtn"
                                className="menu-link"
                                onClick={handleToggle}
                            >
                                <span className="menu-icon">
                                    <span className="menu-line menu-line-1"></span>
                                    <span className="menu-line menu-line-2"></span>
                                    <span className="menu-line menu-line-3"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block w-16 h-full relative z-10 ">
                        <Image
                            src="/assets/logo-TREE.svg"
                            alt="logo"
                            layout="intrinsic"
                            width="100%"
                            height="100%"
                            objectFit="contain"
                            className="cursor-pointer " />
                    </div>

                    <div
                        className="h-16  hidden lg:flex items-center justify-center  duration-200"
                    >
                        {listMenu.map((item, index) => (
                            <Link key={index} href={item.href} scroll={false}>
                                <button
                                    className={classNames(router.pathname === item.href ? "underline underline-offset-4  decoration-4" : "", "text-[#B6A694] px-4 cursor-pointer uppercase")}
                                >
                                    {item.name}
                                </button>
                            </Link>
                        ))}

                    </div>

                    <div>
                        <Link href="/register">
                            <button
                                className="h-full px-4 items-center cursor-pointer uppercase text-red-700 font-semibold"
                            >
                                ENQUIRY
                            </button>
                        </Link>
                    </div>

                </div>

                <div
                    id="mobile-menu"
                    className={
                        navbarOpen
                            ? "menu-overlay open lg:hidden"
                            : "menu-overlay lg:hidden"
                    }
                >
                    <div className="absolute bg-[url('/assets/manifestobg.png')]  bg-left-bottom w-full bg-no-repeat h-full bg-contain opacity-10 -translate-x-20" />

                    <div className="overlay-info absolute">
                        <div className="space-y-1 flex h-full justify-center flex-col ">
                            <div className=" justify-items-center grid pb-10">
                                <img
                                    src="/assets/logo.svg"
                                    alt="logo"
                                    className="w-32 h-32 object-contain "
                                />
                            </div>
                            {listMenu.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <button
                                        className={
                                            router.pathname == item.href
                                                ? "text-white hover:text-white block px-3 py-2  text-base text-center font-semibold"
                                                : "text-gray-400 hover:text-white block px-3 py-2  text-base text-center"
                                        }
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;