import React from 'react';
import porto1 from "../Aset/porto1.png"
import porto2 from "../Aset/porto2.png"

function Card() {
    return (
        <div className='mx-auto flex flex-wrap gap-10 items-center justify-center'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                <div className='justify-center flex mt-2'>
                    <a href="https://github.com/kevintanes/gadgethouse-warehouse-app">
                        <img className="rounded-lg h-72 w-72 shadow-lg" src={porto1} alt="portofolio" />
                    </a>
                </div>
                <div className="p-2 text-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gadget House</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Gadget House is an e-commerce website application built with React.js and Express.js
                    </p>
                </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                <div className='justify-center flex mt-2'>
                    <a href="https://github.com/kevintanes/pokemon-list">
                        <img className="rounded-lg h-72 w-72 shadow-lg" src={porto2} alt="portofolio" />
                    </a>
                </div>
                <div className="p-2 text-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pokemon List</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A responsive web application using ReactJS to interact with Pokemon data.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Card;
