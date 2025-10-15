import LangsAndTools from "./LangsAndTools";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Projects from "./Projects";
import NewSiteMessage from "./new-site-message";
const Main = () => {
  return (
    <>
      <main className="md:px-2 lg:py-[1rem] lg:px-[4rem] pt-[17vh]  lg:pt-0 ">
        <motion.header className="overflow-hidden mb-1 lg:max-w-[50%] h-[80vh] lg:h[100vh]">
          <div>
            <motion.h1
              className=" text-4xl md:text-7xl"
              drag
              dragTransition={{
                min: 0,
                max: 0,
                bounceDamping: 8,
              }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.5,
                bounce: 0.2,
              }}
            >
              Hello,<br></br> I&apos;m Arun Khatri.
            </motion.h1>
            <motion.p
              className="text-xl lg:text-4xl font-sans tracking-widest sm:tracking-wide"
              initial={{ x: "-110%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Student, Developer, Learner
            </motion.p>
          </div>
        </motion.header>

        {/* <motion.blockquote
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
                </motion.blockquote> */}

        <Projects />
        {/* <About /> */}

        <LangsAndTools />
        {/* <blockquote className="bg-none">
          <p className="text-3xl lg:text-7xl " id="quote">
            {quote.quote}
          </p>
          <p className="text-3xl lg:text-7xl " id="author">
            {" "}
            -{quote.author}
          </p>
        </blockquote> */}

        <Footer />
        <NewSiteMessage />
      </main>
    </>
  );
};

export default Main;
