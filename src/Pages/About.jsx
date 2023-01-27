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
                    Hello, I'm Kevin Tanes a student studying Full Stack Web Development at Purwadhika school with an undergraduate degree in Civil Engineering. 
                    Having experience in an IT company as developer has made me interested in becoming a programmer and further developing my skills in web development.
                </p>
            </div>
        </div>
    );
}

export default About;