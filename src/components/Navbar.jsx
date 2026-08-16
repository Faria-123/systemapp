"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Facilities", href: "/allfacilities" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Add Facility", href: "/add-facility" },
    { label: "Manage My Facilities", href: "/manage-facilities" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    // Better Auth session
    const userData = authClient.useSession();
    const user = userData.data?.user;

    // console.log("USER:", user);
    // console.log("IMAGE:", user?.image);

    // Mobile menu
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Logout
    const handleout = async () => {
        await authClient.signOut();
        setIsOpen(false);
        router.refresh();
    };

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto h-20 md:h-24 px-4 sm:px-6 flex items-center justify-between">

                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/logo10.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        priority
                    />
                </Link>

                {/* ================= DESKTOP NAVIGATION ================= */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm xl:text-base font-medium transition-colors ${isActive
                                    ? "text-green-600 font-semibold"
                                    : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* ================= DESKTOP USER ACTIONS ================= */}
                <div className="hidden lg:flex items-center gap-3">
                    {!user ? (
                        <>
                            {/* Sign In */}
                            <Link
                                href="/signin"
                                className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-full transition text-sm"
                            >
                                Sign In
                            </Link>

                            {/* Register */}
                            <Link
                                href="/register"
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
                            >
                                Register
                                <ArrowRight size={16} />
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">

                            {/* Profile Image */}
                            <Avatar>
                                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            {/* User Name */}
                            <span className="text-sm font-medium text-gray-700">
                                {user?.name}
                            </span>

                            {/* Sign Out */}
                            <Button
                                variant="danger"
                                onPress={handleout}
                            >
                                LogOut
                            </Button>
                        </div>
                    )}
                </div>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-700 hover:text-green-600 p-2 rounded-md focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-6 flex flex-col gap-4 shadow-lg">

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`py-2 text-base transition-colors ${isActive
                                        ? "text-green-600 font-semibold"
                                        : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile User Actions */}
                    <div className="pt-4 border-t border-gray-100">

                        {!user ? (
                            <div className="flex flex-col gap-3">

                                {/* Sign In */}
                                <Link
                                    href="/signin"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2.5 rounded-full transition"
                                >
                                    Sign In
                                </Link>

                                {/* Register */}
                                <Link
                                    href="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-full transition"
                                >
                                    Register
                                    <ArrowRight size={18} />
                                </Link>

                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-3">

                                {/* Profile */}
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>

                                {/* Name */}
                                <p className="text-sm font-medium text-gray-700">
                                    {user?.name}
                                </p>

                                {/* Sign Out */}
                                <Button
                                    variant="danger"
                                    onPress={handleout}
                                >
                                    Sign Out
                                </Button>

                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;