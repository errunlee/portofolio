import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <>
            <motion.section
                drag dragTransition={{
                    min: 0,
                    max: 0,
                    bounceDamping: 8
                }}
                initial={{ y: '-100%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 2 }}
            >
                <h2>📜 About Me</h2>
                <p class="about">
                    Hello there, I am Arun Khatri currently studying Bachelor's in
                    Computer Application at Samriddhi College. And I love creating cool
                    websites.
                </p>


            </motion.section>
        </>
    )
}

export default About