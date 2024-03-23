

import React from 'react'

const LangsAndTools = () => {
    return (
        <section class="langsandtools">
            <div
                class="flex justify-center flex-col items-center mb-3"
            >
                <h2
                    class="text-4xl mb-5"
                >
                    Languages and Tools that I Work On
                </h2>
                <hr
                />
            </div>

            <marquee behaviour='alternate' scrollamount='30'>

                <div class="skills flex justify-center">
                    <img
                        src="./images/skills/html5-original.svg"
                        title="HTML5"
                        alt="HTML"
                        width="80"
                        height="80"
                    />&nbsp;
                    <img
                        src="./images/skills/css3-original.svg"
                        title="CSS3"
                        alt="CSS"
                        width="80"
                        height="80"
                    />&nbsp;
                    <img
                        src="./images/skills/javascript-original.svg"
                        title="JavaScript"
                        alt="JavaScript"
                        width="80"
                        height="80"
                    />
                    <img
                        src="./images/skills/react-original.svg"
                        title="React"
                        alt="React"
                        width="80"
                        height="80"
                    />&nbsp;
                    <img
                        src="./images/skills/nodejs-plain.svg"
                        title="NodeJS"
                        alt="NodeJS"
                        width="80"
                        height="80"
                    />&nbsp;
                    <img
                        src="./images/skills/git-original.svg"
                        title="Git"
                        alt="Git"
                        width="80"
                        height="80"
                    />
                    <img
                        src="./images/skills/Bootstrap_logo.svg.png"
                        title="Bootstrap"
                        alt="bootstrap"
                        width="80"
                        height="80"
                    />
                    <img
                        src="./images/skills/Touchicon-180.png"
                        title="Firebase"
                        alt="firebase"
                        width="80"
                        height="80"
                    />
                </div>
            </marquee>

        </section>
    )
}

export default LangsAndTools