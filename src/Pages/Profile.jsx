import React from 'react';
import PP from '../Aset/kevintanes-fix.jpg';

function Profile() {
    return (
        <div className='container mx-auto justify-center flex'>
            <div className='my-8 mx-8 text-center'>
                <div className='flex justify-center py-10'>
                    <img className="w-96 rounded-full ring-4 ring-purple-900 object-cover"
                        src={PP}
                        alt="Profile Picture" />
                </div>
                <p className='text-4xl font-semibold mx-4'>
                    Kevin Tanes
                    <br />
                    Programmer | Web Developer
                </p>

            </div>
        </div>

    );
}

export default Profile;