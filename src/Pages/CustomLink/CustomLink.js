import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolve = useResolvedPath(to);
    const match = useMatch({ path: resolve.pathname, end: true })


    return (
        <div>
            <Link style={{
                color: match ? 'white' : 'gray',
                textDecoration: match ? 'none' : 'none'
            }}
                to={to}
                {...props}
            >{children}</Link>
        </div>
    );
};

export default CustomLink;