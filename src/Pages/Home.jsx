import React from 'react';
import Background from '../Aset/background.avif';

function Home() {
    return (
        <div className=' m-auto justify-center text-center'>
            <img
                style={
                    {
                        height: 450
                    }
                }
                className="w-full inset-0 relative " src={Background} alt="image-background" />

            <div className='absolute top-20 inset-x-0'>
                <div className=' text-white'>
                    <div className='flex justify-center container m-auto'>
                        <img className="w-10 h-10 rounded-full my-4 mr-2" src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw" alt="Rounded avatar" />
                        <p className='text-3xl font-semibold py-5'> Kevin Tanes</p>
                    </div>
                    <p className='text-6xl font-semibold py-5'> GET EVERY SINGLE SOLUTIONS</p>
                    <p className='text-3xl py-4'> Welcome to My Portfolio </p>
                </div>
                <div className='pt-20'>
                    <button type="button" className="text-white bg-gray-500 hover:bg-white hover:text-gray-500 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2">VIEW MY WORKS</button>
                    <button type="button" className="text-white hover:bg-white hover:text-gray-500 font-medium rounded-full text-lg px-5 py-2.5 mr-2 mb-2">ABOUT ME</button>
                </div>
            </div>
        </div>

    );
}

export default Home;