import React from 'react';
import Card from '../Components/Card';

function Portfolio() {
    return (

        <div className='bg-purple-900'>
            
            <h2 className="mb-4 pt-7 text-5xl font-bold text-center text-white ">Portfolio</h2>
            <div className='container px-3 m-auto mt-10 flex flex-wrap gap-5 justify-center pb-10'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    );
}

export default Portfolio;