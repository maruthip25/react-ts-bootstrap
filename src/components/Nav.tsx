import * as React from 'react';
import {
    Link
} from 'react-router-dom';

export const Nav = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
    </div>
);