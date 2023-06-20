import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import reactJsLogo from "../Aset/react-logo.png";
import chakraLogo from "../Aset/chakra-ui.png";
import bootstrapLogo from "../Aset/bootstrap.png";


function FrontEnd() {
    return (
        <div className='mx-auto flex flex-wrap gap-10 items-center justify-center'>
            <div className="flex items-center">
                <img src={reactJsLogo} className="w-40" alt="React-Js Logo" />
            </div>
            <div className="flex items-center">
                <img src={chakraLogo} className="w-64" alt="Chakra-ui Logo" />
            </div>
            <div className="flex items-center">
                <img src={bootstrapLogo} className="w-40" alt="Bootstrap Logo" />
            </div>
        </div>
    );
}

export default FrontEnd;