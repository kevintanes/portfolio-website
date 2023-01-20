import React from 'react';
import BackEnd from '../Components/BackEndSkill';
import FrontEnd from '../Components/FrontEndSkill';

function Skill() {
    return (
        <div className='text-center pt-7 pb-10'>
            <h1 className='text-5xl font-bold' >Skills</h1>
            <div className='text-3xl font-semibold py-5'>
                <div>
                    <span className='underline'>Front-End Development</span>
                    <div className='flex mt-3 mx-10 md:mx-48 '>
                        <FrontEnd />
                    </div>
                </div>
                <div className='mt-10'>
                    <span className='underline'>Back-End Development</span>
                    <div className='flex mt-3 mx-10'>
                        <BackEnd />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Skill