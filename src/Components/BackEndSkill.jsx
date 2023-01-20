import React from 'react';
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5"
import { SiMysql, SiPostman } from "react-icons/si"


function BackEnd() {
    return (
        <div className='m-auto flex flex-wrap gap-5'>
            <div className="m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-blue-700 border border-black text-white">
                <IoLogoNodejs className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>NODE JS</p>

            </div>
            <div className="m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-gray-900 border border-black text-white">
                <SiMysql className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>MySQL</p>

            </div>
            <div className="m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-blue-700 border border-black text-white">
                <SiPostman className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>Postman</p>

            </div>

        </div>
    );
}

export default BackEnd;