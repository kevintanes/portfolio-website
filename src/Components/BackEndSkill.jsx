import React from 'react';
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5"
import { SiMysql, SiPostman } from "react-icons/si"
import nodejsLogo from "../Aset/node-js.png";
import mysqlLogo from "../Aset/mysql.png";
import sequelizeLogo from "../Aset/sequelize.png";
import expressLogo from "../Aset/express.png";

function BackEnd() {
    return (
        <div className='mx-auto flex flex-wrap gap-10 items-center justify-center'>
            <div className="flex items-center">
                <img src={nodejsLogo} className="w-64" />
            </div>
            <div className="flex items-center">
                <img src={mysqlLogo} className="w-64" />
            </div>
            <div className="flex items-center">
                <img src={sequelizeLogo} className="w-64" />
            </div>
            <div className="flex items-center">
                <img src={expressLogo} className="w-64" />
            </div>
        </div>
    );
}

export default BackEnd;