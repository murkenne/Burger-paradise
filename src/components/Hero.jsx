import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/*Overlay*/}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/55'>
                    <h1>The <span>Best</span></h1>
                    <h1>Foods <span>Delivered</span></h1>
                </div>
                <img src='https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
            </div>
        </div>
    )
}

export default Hero;