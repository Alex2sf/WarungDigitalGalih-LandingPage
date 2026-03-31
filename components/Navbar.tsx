"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Logo() {
    return (
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Roof */}
            <path d="M50 8L5 45H15V90H85V45H95L50 8Z" fill="currentColor" />
            {/* Door */}
            <rect x="30" y="55" width="16" height="35" fill="white" rx="2" />
            {/* Window / Register */}
            <rect x="54" y="52" width="22" height="16" fill="#888" rx="3" />
            <rect x="57" y="62" width="16" height="3" fill="#666" rx="1" />
            <circle cx="59" cy="57" r="1.5" fill="#555" />
            <circle cx="63" cy="57" r="1.5" fill="#555" />
            <circle cx="67" cy="57" r="1.5" fill="#555" />
        </svg>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Beranda", href: "#hero" },
        { name: "Fitur", href: "#solution" },
        { name: "Portofolio", href: "#portfolio" },
        { name: "Harga", href: "#pricing" },
        { name: "Kontak", href: "#cta" },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="text-white">
                            <Logo />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-extrabold text-lg text-white tracking-tight leading-tight">
                                WarungGalih
                            </span>
                            <span className="text-[10px] text-zinc-500 font-medium tracking-[0.2em] uppercase">Digital Solutions</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-zinc-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#cta"
                            className="ml-4 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-all"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-400 hover:text-white p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#cta"
                        onClick={() => setIsOpen(false)}
                        className="block mx-4 mt-4 px-4 py-3 bg-white text-black text-center font-bold rounded-xl"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </nav>
    );
}
