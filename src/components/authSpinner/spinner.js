import React from 'react';

import './spinner.css';

const spinner = () => {
    return (
        <div id='authSpinner' className='authSpinner-container noShow'>
            <div className='authSpinner'>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default spinner;
