"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

const Navbar = ({session}: {session: UserProps | null}) => {
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
                    {session?.user? (
                        <>
                            <Link href="/dashboard" className="hover:text-sky-950">Dashboard</Link>
                            <Link href="/dashboard/projects" className="hover:text-sky-950">Manage Projects</Link>
                            <Link href="/dashboard/blogs" className="hover:text-sky-950">Manage Blogs</Link>
                            <Link href="/dashboard/message" className="hover:text-sky-950">Manage Messages</Link>
                            <Link onClick={() => signOut()} href="/login" className="hover:text-sky-950">Logout</Link>
                        </>
                    ): (
                        <>
                            <Link href="/" className="hover:text-sky-950">Home</Link>
                            <Link href="/projects" className="hover:text-sky-950">Projects</Link>
                            <Link href="/contact" className="hover:text-sky-950">Contact</Link>
                            <Link href="/blogs" className="hover:text-sky-950">Blogs</Link> 
                            {/* <Link href="/login" className="hover:text-sky-950">Login</Link> */}
                            {/* <Link href="/register" className="hover:text-sky-950">Register</Link> */}
                        </>
                    )}
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
                        {session?.user? (
                            <>
                                <Link href="/dashboard" className="block hover:text-sky-950">Dashboard</Link>
                                <Link href="/dashboard/projects" className="block hover:text-sky-950">Manage Projects</Link>
                                <Link href="/dashboard/blogs" className="block hover:text-sky-950">Manage Blogs</Link>
                                <Link href="/dashboard/message" className="block hover:text-sky-950">Manage Messages</Link>
                                <Link onClick={() => signOut()} href="/login" className="block hover:text-sky-950">Logout</Link>
                            </>
                        ): (
                            <>
                                <Link href="/" className="block hover:text-sky-950">Home</Link>
                                <Link href="/projects" className="block hover:text-sky-950">Projects</Link>
                                <Link href="/contact" className="block hover:text-sky-950">Contact</Link>
                                <Link href="/blog" className="block hover:text-sky-950">Blogs</Link>                             
                                {/* <Link href="/login" className="block hover:text-sky-950">Login</Link> */}
                                {/* <Link href="/register" className="block hover:text-sky-950">Register</Link> */}
                            </>
                        )}                        
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
