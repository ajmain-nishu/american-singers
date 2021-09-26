import React from 'react';
import './Header.css'



// header arrow function component
const Header = () => {
    return (
        <div className="text-center shadow rounded py-4 mb-4 header__bg--purple">

            <h1 className="fw-bold display-5">American Singers</h1>
            <p>Music shouldn't be just a tune, it should be a touch</p>
            <h3>Total Budget: 100 Million</h3>

        </div>
    );
};



export default Header;