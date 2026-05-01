import React from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser} from '@clerk/react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const {openSignIn} = useClerk();
    const {user} = useUser();
    const displayName =
        [user?.firstName, user?.lastName].filter(Boolean).join(' ') ||
        user?.fullName ||
        user?.username ||
        user?.primaryEmailAddress?.emailAddress?.split('@')[0] ||
        'there';

    return (
        <div className ='shadow py-4'>
            <div className = ' container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                <img src={assets.logo} alt=" logo " />
                {
                    user
                    ?<div className='flex items-center gap-2'>
                        <Link to='/applications'>Applied Jobs |</Link>
                        <p></p>
                        <p className='max-sm:hidden'>Hi, {displayName}</p>
                        <UserButton />
                    </div>
                    :<div className = 'flex gap-4 max-sm:text-xs'>
                    <button className='text-gray-600'>Recruiter Login</button>
                    <button onClick={ () => openSignIn() } className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
                    </div>
                }
                
            </div>
        </div>
    )

}
export default Navbar;
