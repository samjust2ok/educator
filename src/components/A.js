import React, { Children } from 'react';
import { useLocation, Link } from 'react-router-dom';


const A = ({to,children})=>{
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link className = "Link" to = {to}>
            {
                children(isActive)
            }
        </Link>
    );
}

export default A;