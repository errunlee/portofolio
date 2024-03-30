
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { applications } from './Porject_data'
const Projects = () => {
    const [isParentAnimated, setIsParentAnimated] = useState(false)
    let duration = 0;
    return (
        <>
            <motion.section
                class="light overflow-hidden">
                <h2>👩🏽‍🚀 Projects</h2>

                <p>
                    These are some applications and projects that I've worked on. I've
                    mainly used react for frontend and firebase for backend in these
                    projects. Feel free to check them out below and find the source codes
                    in my github.
                </p>

                <div class="project_cards">
                    {
                        applications.map((app, ind) => {
                            const { imageSrc, title, description } = app
                            return (
                                <motion.div key={ind}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: duration += 0.2 }}
                                    class="box reveal">
                                    <img src={imageSrc} alt="note image" />
                                    <h2>{title}</h2>
                                    <p>
                                        {description}
                                    </p>
                                    <button id="notebook">Check this out</button>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </motion.section>
        </>
    )
}

export default Projects