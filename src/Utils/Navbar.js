import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    };
    return (
        <div className='w-full'>
            <nav className=" bg-white w-full">
                <div className="  flex flex-row items-center justify-between mx-2 p-1">
                    <div className='flex flex-col items-start justify-between'>
                        <h1 className="text-2xl font-semibold text-black">Hey Admin👋,</h1>
                        <h3 className="text-lg font-semibold text-black">Welcome to Dashboard</h3>
                    </div>
                    <button type="button" onClick={() => logout()} className="text-red-700 justify-end hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Logout</button>
                </div>
            </nav>

        </div>
    )
}

