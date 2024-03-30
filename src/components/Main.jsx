

import React, { useEffect, useState } from 'react'
import About from './About'
import LangsAndTools from './LangsAndTools'
import Footer from './Footer'
import { motion } from 'framer-motion'
import Projects from './Projects'
const Main = () => {
    const [quote, setQuote] = useState({
        quote: '',
        author: ''
    })

    useEffect(() => {
        let url = "https://type.fit/api/quotes";
        let getQuote = fetch(url);
        getQuote
            .then((r) => {
                return r.json();
            })
            .then((val) => {
                let random = Math.floor(Math.random() * val.length);
                setQuote({
                    quote: val[random].text,
                    author: val[random].author.slice(0, -10)
                });
            });
    }, [])
    return (
        <>
            <main className=' px-2 lg:py-[1rem] lg:px-[4rem] pt-[20vh]  lg:pt-0 '>
                <motion.header
                    className='overflow-hidden mb-1 lg:max-w-[50%] h-[80vh] lg:h[100vh]'>
                    <div>

                        <motion.h1
                            className=' text-5xl lg:text-7xl '
                            drag dragTransition={{
                                min: 0,
                                max: 0,
                                bounceDamping: 8
                            }}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", duration: 1, delay: 0.5, bounce: 0.2 }}
                        >
                            Hello, I'm Arun Khatri.
                        </motion.h1>
                        <motion.p
                            className='text-xl lg:text-4xl'
                            initial={{ x: '-110%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >Student,Developer,Learner</motion.p>
                    </div>

                </motion.header>

                <motion.blockquote
                    initial={{ x: '-100%' }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}

                >
                    <motion.p
                        className='text-3xl lg:text-7xl '
                        drag dragTransition={{
                            min: 0,
                            max: 0,
                            bounceDamping: 8
                        }}>Imma hungry learner who likes creating cool webapps...</motion.p>
                </motion.blockquote>

                <Projects />
                <About />


                <LangsAndTools />
                <blockquote className='bg-none'>
                    <p className='text-3xl lg:text-7xl ' id="quote">{quote.quote}</p>
                    <p className='text-3xl lg:text-7xl ' id="author"> -{quote.author}</p>
                </blockquote>

                <Footer />
            </main>
        </>
    )
}

export default Main