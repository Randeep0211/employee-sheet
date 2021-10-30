

import React from 'react';
import './Sidebar.css'

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='folder'>
            <h2>+ New Folder</h2>

            </div>
            <li>Employees</li>
            <li>Days Off</li>
        </div>
    );
}

export default Sidebar;