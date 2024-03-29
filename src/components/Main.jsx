

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
                    author: val[random].author
                });
            });
    }, [])
    return (
        <>
            <main>
                <motion.header
                    className='overflow-hidden mb-1'>
                    <div>

                        <motion.h1
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
                    <motion.p drag dragTransition={{
                        min: 0,
                        max: 0,
                        bounceDamping: 8
                    }}>Imma hungry learner who likes creating cool webapps...</motion.p>
                </motion.blockquote>

                <Projects />
                <About />


                <LangsAndTools />
                <blockquote className='bg-none'>
                    <p id="quote">{quote.quote}</p>
                    <p id="author"> -{quote.author}</p>
                </blockquote>

                <Footer />
            </main>
        </>
    )
}

export default Main