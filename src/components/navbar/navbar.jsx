import React from 'react';

import './navbar.css';

const navbar = (props) => {

    return (
        <div id='nav' className='navbar'>
            <div className='menu'>
                <ul className='menuItems'>
                    {/* <li onClick={props.print}>Print</li> */}
                    {/* <li onClick={props.download}>Download</li> */}
                </ul>
            </div> 
            <div className='logoutBtn' onClick={props.logout}>Logout</div>

        </div>
    );
};

export default navbar;
