import React from 'react';
import { motion } from 'framer-motion';  // Importing motion from Framer Motion

const FeaturesSection = () => {
    return (
        <section className="bg-[#FFC53D] py-[20vh] px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Features That Make Sharing Notes Simple & Fun
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Feature 1: Create & Share Notes */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create & Share Notes</h3>
                        <p className="text-lg text-gray-600">
                            Express your thoughts in simple text, images, or even videos. Share your notes with friends or publicly to inspire others.
                        </p>
                    </motion.div>

                    {/* Feature 2: Follow Users */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Users</h3>
                        <p className="text-lg text-gray-600">
                            Follow your favorite users to stay up-to-date with their latest posts and interact with a community of like-minded individuals.
                        </p>
                    </motion.div>

                    {/* Feature 3: Discover New Notes */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Discover New Notes</h3>
                        <p className="text-lg text-gray-600">
                            Explore trending posts, discover fresh ideas, or search for specific notes from a diverse community of note sharers.
                        </p>
                    </motion.div>

                    {/* Feature 4: Engage with Notes */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Engage with Notes</h3>
                        <p className="text-lg text-gray-600">
                            Like, comment, and interact with posts that resonate with you. Start meaningful conversations and build connections.
                        </p>
                    </motion.div>

                    {/* Feature 5: Save for Later */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Save for Later</h3>
                        <p className="text-lg text-gray-600">
                            Found something inspiring? Save your favorite notes to revisit and get inspired again, whenever you need it.
                        </p>
                    </motion.div>

                    {/* Feature 6: Notifications */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h3>
                        <p className="text-lg text-gray-600">
                            Stay notified whenever your followed users post new content or someone interacts with your notes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
