"use client";
import typing from '../assets/typing.png';
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Pop-out effect
            gsap.fromTo(
                heroRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
            );

            // Fade-in and slight upward animation for text
            gsap.fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
            );

            // Button pop effect
            gsap.fromTo(
                buttonRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)" }
            );
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    // Button Hover Effect
    const handleHover = () => {
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 });
    };

    const handleHoverExit = () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="bg-[#FFC53D] space-x-28 px-[40vh] py-[20vh] flex flex-row justify-start items-center shadow-lg rounded-lg"
            >
                <Image src={typing} alt="icon" width={600} height={600} />
                <div ref={textRef} className="flex flex-col space-y-4">
                    <h1 className="text-9xl font-serif">Post Your Notes</h1>
                    <Link href='/notes'><button
                        ref={buttonRef}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverExit}
                        className="bg-black text-white px-6 py-3 rounded-md text-xl font-semibold transition-all"
                    >
                        Get Started
                    </button>
                    </Link>
                </div>
            </div>

            {/* Notification Section */}
            <div className="bg-black text-white space-x-4 px-[40vh] py-[40vh] flex flex-row justify-center items-center">
                <h1 className="text-9xl font-serif">Get Notified</h1>
            </div>
        </div>
    );
};

export default Hero;
