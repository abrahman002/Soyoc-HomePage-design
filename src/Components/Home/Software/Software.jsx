import React from 'react';
import './Software.css'

const Software = () => {
    return (
        <div className='md:p-14 card'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='font-bold '>More by White Orange Software</h1>
                <p className='text-pink-500'>View profile</p>
            </div>
            <div className='md:grid grid-cols-4'>
                <div className="card card-compact md:w-72  bg-base-100 shadow-xl card-image ">
                    <figure><img className='rounded-lg' src="https://cdn.dribbble.com/userupload/3251445/file/original-c248681dffd70cc4bd3c9cadeda2711e.jpg?compress=1&resize=1024x768" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact md:w-72  bg-base-100 shadow-xl card-image">
                    <figure><img className='rounded-lg' src="https://cdn.dribbble.com/users/965050/screenshots/11048097/media/5c1943186c5751133c990db59c801b7b.png?compress=1&resize=768x576&vertical=center" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact md:w-72  bg-base-100 shadow-xl card-image">
                    <figure><img className='rounded-lg' src="https://cdn.dribbble.com/users/965050/screenshots/10791462/media/2486d39d8d9c33a6a6ea8881549263ce.png?compress=1&resize=768x576&vertical=center" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact md:w-72  bg-base-100 shadow-xl ">
                    <figure><img className='rounded-lg' src="https://cdn.dribbble.com/users/965050/screenshots/11505913/media/b444cf00b5bbafb6ed7ab241208dda1f.png?compress=1&resize=768x576&vertical=center" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Software;