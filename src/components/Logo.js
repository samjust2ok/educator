import React from 'react';
import '../css/Logo.css';
import { useMatch } from '../utils/customHooks';

const Logo = ()=>{
    const matches = useMatch('(min-width:1024px)');
    return (
        <div className = "Logo-Container">
            <div className="Logo">
                <div className="Display">
                    <h1>E</h1>
                </div>
                {
                    matches &&
                    <div className="Name">
                        <h1>Educator</h1>
                    </div>
                }
            </div>
        </div>
    );
}

export default Logo;