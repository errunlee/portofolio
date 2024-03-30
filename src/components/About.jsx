import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div className='flex w-full lg:w-[70%] items-center'>
            <motion.section
                drag dragTransition={{
                    min: 0,
                    max: 0,
                    bounceDamping: 8
                }}
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>📜 About Me</h2>
                <p class="about">
                    Hello there, I am Arun Khatri currently studying Bachelor's in
                    Computer Application at Samriddhi College. And I love creating cool
                    websites.
                </p>


            </motion.section>
        </div>
    )
}

export default About