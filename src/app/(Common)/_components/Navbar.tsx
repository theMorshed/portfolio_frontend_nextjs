"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white text-sky-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">MORSHED</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-6 font-bold">
                    <Link href="/" className="hover:text-sky-950">Home</Link>
                    <Link href="/projects" className="hover:text-sky-950">Projects</Link>
                    <Link href="/blogs" className="hover:text-sky-950">Blogs</Link>   
                    {/* {session ? (
                        <button onClick={handleLogout} className="hover:text-sky-950">Logout</button>
                    ) : (
                        <>
                            <Link href="/login" className="hover:text-sky-950">Login</Link>
                            <Link href="/register" className="hover:text-sky-950">Register</Link>
                        </>
                    )} */}
                    <Link href="/login" className="hover:text-sky-950">Login</Link>
                    <Link href="/register" className="hover:text-sky-950">Register</Link>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="sm:hidden text-xl">
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white p-4 shadow-md">
                    <ul className="space-y-4 font-bold">
                        <Link href="/" className="block hover:text-sky-950">Home</Link>
                        <Link href="/products" className="block hover:text-sky-950">Products</Link>
                        <Link href="/about" className="block hover:text-sky-950">About</Link>                    
                        {/* {session ? (
                            <button onClick={handleLogout} className="block hover:text-sky-950">Logout</button>
                        ) : (
                            <>
                                <Link href="/login" className="block hover:text-sky-950">Login</Link>
                                <Link href="/register" className="block hover:text-sky-950">Register</Link>
                            </>
                        )} */}
                        <Link href="/login" className="block hover:text-sky-950">Login</Link>
                        <Link href="/register" className="block hover:text-sky-950">Register</Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
