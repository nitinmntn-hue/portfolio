import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/dashboard/sidebar.scss';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-header'>My Profile</h1>
            <ul className='sidebar-menu'>
                <li className='menu-item'>
                    <Link>Dashboard</Link>
                </li>
                <li className='menu-item'>
                    <Link>Projects</Link>
                </li>
                <li className='menu-item'>
                    <Link>Message</Link>
                </li>
                <li className='menu-item'>
                    <Link>My info</Link>
                </li>
                <li className='menu-item'>
                    <Link>Settings</Link>
                </li>
                <li className='menu-item'>
                    <Link>Logout</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;