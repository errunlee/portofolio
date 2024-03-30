
import React from 'react'
import { socialMediaLinks } from './Socials'
import { motion } from 'framer-motion'
const Footer = () => {
    let duration = 0.2;
    return (
        <blockquote class="footer">
            <h1 className='text-4xl lg:text-7xl '>Connect with me.</h1>
            <div class="imgs flex items-center">
                {
                    socialMediaLinks.map((social, index) => {
                        const { href, svg } = social
                        return (
                            <motion.a
                                drag dragTransition={{
                                    min: 0,
                                    max: 0,
                                    bounceDamping: 8
                                }}

                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: duration += 0.4 }}
                                key={index} href={href} target="_blank">
                                <img className='img' src={svg} alt="" />
                            </motion.a>
                        )
                    })
                }


            </div>
        </blockquote>
    )
}

export default Footer