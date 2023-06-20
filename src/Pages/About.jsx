import React from 'react';
import { CgProfile } from "react-icons/cg";

function About() {
    return (
        <div className='bg-purple-900 text-white text-center pt-7 pb-10' >

            <div className=''>
                <span className='text-5xl font-bold' >About Me</span>
            </div>

            {/* <div className='flex justify-center py-10'>
                <img className="w-80 h-80 p-1 rounded-full ring-4 ring-gray-300"
                    src="https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png"
                    alt="Profile Picture" />
            </div> */}

            <div className='px-5'>
                <p className='container md:w-2/4 mx-auto text-xl md:text-2xl pt-5 '>
                    I'm a adaptable full-stack web developer who recently made the switch from civil engineering.
                    With expertise in HTML, CSS, JavaScript, React, Node.js,Express.js, Github, MySQL.
                    I have a comprehensive understanding of bothfront-end and back-end development.
                    My meticulous problem-solving skills and project management background from civil engineering bring attention to detail and a drive for excellence. I'm constantly learning and staying up-to-date with the latest trends in web development.
                    Collaborating with like-mindedindividuals, I'm passionate about creating exceptional web applications.
                </p>
            </div>
        </div>
    );
}

export default About;