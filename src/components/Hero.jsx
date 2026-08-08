"use client";

import React from "react";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { ArrowRight, Compass, Calendar, Gift } from "@gravity-ui/icons";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] bg-slate-950 text-white flex items-center justify-center overflow-hidden py-20">
            {/* Background Accent Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-green-600/10 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8">

                {/* Platform Badge (Fixed without startContent prop) */}
                <Chip
                    variant="flat"
                    color="success"
                    className="bg-green-950/60 border border-green-800/50 text-green-300 px-4 py-2 text-sm backdrop-blur-md flex items-center gap-2"
                >
                    <Gift size={16} className="text-green-400 shrink-0" />
                    <span>Premier Sports Facility Booking Platform</span>
                </Chip>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-balance">
                    Book Your Game. <br />
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                        Own The Turf.
                    </span>
                </h1>

                {/* Subtitle / Short Description */}
                <p className="text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed text-balance">
                    Discover and reserve premium football turfs, badminton courts, tennis courts, and swimming lanes in real-time. Seamless bookings powered by dynamic scheduling.
                </p>

                {/* Call To Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                    <Button
                        as={Link}
                        href="/booking"
                        color="success"
                        size="lg"
                        radius="full"
                        className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-green-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <Compass size={20} />
                        <span>Explore Facilities</span>
                        <ArrowRight size={20} />
                    </Button>

                    <Button
                        as={Link}
                        href="/my-bookings"
                        variant="bordered"
                        size="lg"
                        radius="full"
                        className="w-full sm:w-auto border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-8 py-6 text-base transition-all flex items-center justify-center gap-2"
                    >
                        <Calendar size={20} className="text-slate-300" />
                        <span>View Slots</span>
                    </Button>
                </div>

                {/* Quick Platform Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-slate-800/80 w-full max-w-2xl mt-4">
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                        <p className="text-xs sm:text-sm text-slate-400">Verified Venues</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">10k+</p>
                        <p className="text-xs sm:text-sm text-slate-400">Slots Reserved</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <p className="text-2xl sm:text-3xl font-bold text-white">Instant</p>
                        <p className="text-xs sm:text-sm text-slate-400">Confirmation</p>
                    </div>
                </div>

            </div>
        </section>
    );
}