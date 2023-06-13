import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'


const Banner = () => {
    return (
        <div className='pt-16 pb-16 pr-28 pl-28 '>
            <div className='flex items-center justify-around'>
                <div className='flex items-center'>
                    <img style={{ width: '48px', height: '48px' }} src="https://cdn.dribbble.com/users/965050/avatars/normal/4fddef92c4c8e8662b869cdfa7148114.png?1650908942" alt="" />
                    <div className='ml-3'>
                        <h1 className='font-bold'>Politician Website</h1>
                        <div className='flex  text-gray-500 '>
                            <h1 className='mr-2'>White Orange Software  </h1>
                            <p>. Follow</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center'>
                    <button className='btn mr-3 btn-md'>Save</button>
                    <button className='btn btn-secondary text-white btn-md '><HeartIcon className='h-4 w-4'/>Love</button>
                </div>
            </div>
            <div className='mt-[50px] pl-[160px]'>
                <img className='rounded-md' src="https://cdn.dribbble.com/users/965050/screenshots/4085926/media/469aaf643986d1c25d39791af7fd3162.png" alt="" />
            </div>
            
        </div>
    );
};

export default Banner;