import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import setting from '../../assets/icons/settings.svg'
import logout from '../../assets/icons/logout.svg'
import report from '../../assets/icons/report.svg'
import structure from '../../assets/icons/structure.svg'
import employee from '../../assets/icons/employee.svg'
import referrals from '../../assets/icons/referrals.svg'
import job from '../../assets/icons/job.svg'
import application from '../../assets/icons/application.svg'
import career from '../../assets/icons/career.svg'
import message from '../../assets/icons/message.svg'
import calender from '../../assets/icons/calender.svg'
import menu from '../../assets/icons/menu.svg'
import Logo from '../Logo/Logo';
import { AiOutlineBars } from "react-icons/ai"
const Sidebar = () => {
    const [active, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)
    }
    return (
        <div>
            {/* Small screen navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 ${active && '-translate-x-full'
                    } transform md:translate-x-0 transition duration-200 ease-in-out`}
            >
                {/* Brand logo */}
                <div className='w-full hidden md:flex py-10 justify-center items-center mx-auto'>
                    <Logo />
                </div>

                <div>
                    {/* This is menu section */}
                    <div className='mb-3'>
                        <span className='mx-1 font-bold'>Menu</span>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3 rounded-md transition-colors bg-primary duration-300 transform hover:bg-primary hover:text-white ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={menu} />

                            <span className='mx-4 font-medium'>Dashboard</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={message} />

                            <span className='mx-4 font-medium'>Message</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={calender} />

                            <span className='mx-4 font-medium'>Calender</span>
                        </NavLink>
                    </div>
                    {/* This is recruitment section */}
                    <div className='mb-3'>
                        <span className='mx-1 font-bold'>Recruitment</span>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={job} />

                            <span className='mx-4 font-medium'>Jobs</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={application} />

                            <span className='mx-4 font-medium'>Application</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={career} />

                            <span className='mx-4 font-medium'>Career Site</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={referrals} />

                            <span className='mx-4 font-medium'>My Referrals</span>
                        </NavLink>

                    </div>
                    <div className='mb-3'>
                        <span className='mx-1 font-bold'>Organization</span>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={employee} />

                            <span className='mx-4 font-medium'>Employee</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={structure} />

                            <span className='mx-4 font-medium'>Structure</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={report} />

                            <span className='mx-4 font-medium'>Report</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <img src={setting} />

                            <span className='mx-4 font-medium'>Settings</span>
                        </NavLink>
                        <button

                            className='flex w-full items-center px-4 py-2 mt-3 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <img src={logout} />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;