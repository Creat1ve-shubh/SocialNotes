"use client";
import typing from '../assets/typing.png';
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import FeaturesSection from './Features';


const Hero = () => {

    return (
        <div className="overflow-hidden">

            {/* Hero Section */}
            <div className="bg-[#FFC53D] space-x-28 px-[40vh] py-[20vh] flex flex-row justify-start items-center shadow-lg rounded-lg"
            >
                <motion.div

                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>

                    <div className='flex flex-row items-center justify-center space-x-4'>

                        <Image src={typing} alt="icon" width={600} height={600} />
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-9xl font-serif">Post Your Notes</h1>
                            <Link href='/notes'><button

                                className="bg-black text-white px-6 py-3 rounded-md text-xl font-semibold transition-all"
                            >
                                Get Started
                            </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>



            <div className="bg-black text-white space-x-4 px-[40vh] py-[40vh] flex flex-col justify-center items-center">
                {/* Welcome Section */}
                <motion.h1
                    className="text-6xl font-serif mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Welcome to SocialNotes
                </motion.h1>
                <motion.p
                    className="text-2xl text-center font-sans font-thin max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    In today's fast-paced world, we often have ideas and thoughts that deserve to be shared,
                    but we don't always have the platform or space to do so.
                    That's where SocialNotes comes in. Our platform is designed to help you share your thoughts,
                    ideas, and inspirations with the world, in the simplest and most engaging way.
                    Whether it's a quick thought, a long reflection, or a creative spark,
                    SocialNotes provides you with a digital space to post notes and connect with others.
                </motion.p>

                {/* Social Space Section */}
                <motion.h2
                    className="text-5xl font-serif mt-16 mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    A Social Space to Share and Discover
                </motion.h2>
                <motion.p
                    className="text-lg font-sans font-thin text-center max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    At SocialNotes, we believe that every idea matters.
                    Our platform is not just about writing notes—it's about building a community around shared thoughts,
                    creative expressions, and knowledge.
                    Discover fresh ideas from people around the world,
                    follow your favorite contributors,
                    and engage with the content that speaks to you.
                    It's a space where creativity, reflection, and personal expression meet.
                </motion.p>

                {/* Create, Share, and Connect Section */}
                <motion.h2
                    className="text-5xl font-serif mt-16 mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    Create, Share, and Connect
                </motion.h2>
                <motion.p
                    className="text-lg font-sans font-thin text-center max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                    Sharing your thoughts should not be a complex task. With SocialNotes, posting notes is simple and fast. Whether you're writing a personal journal, sharing a motivational quote, or exploring new creative ideas, our platform is built to make note-taking and sharing as easy as possible. You can post text, images, or videos—whatever helps you express your ideas best. Plus, with our social features, you can follow users, comment on their posts, and keep up with your favorite content.
                </motion.p>
            </div>

            <FeaturesSection />

        </div >

    );
};

export default Hero;
