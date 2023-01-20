import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";

function FrontEnd() {
    return (
        <div className='m-auto flex flex-wrap gap-5'>
            <div className="md:order-1 m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-blue-700 border border-black text-white">
                <TbBrandJavascript className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>JAVA SCRIPT</p>

            </div>
            <div className="md:order-2 m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-gray-900 border border-black text-white">
                <IoLogoCss3 className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>CSS</p>

            </div>
            <div className="md:order-4 m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-blue-700 border border-black text-white">
                <IoLogoHtml5 className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>HTML</p>

            </div>
            <div className="md:order-3 md:order m-auto w-3/4 mb-2 sm:h-48 sm:w-48 p-5 bg-gray-900 border border-black text-white">
                <IoLogoReact className='text-8xl m-auto' />
                <p className='text-center text-white text-2xl pt-2'>React JS</p>

            </div>
        </div>
    );
}

export default FrontEnd;