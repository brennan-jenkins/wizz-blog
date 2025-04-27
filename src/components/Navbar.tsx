import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto p-4">
                <h1 className="text-white text-lg font-bold">Futwiz Blog posts</h1>
            </div>
        </nav>
    );
};

export default Navbar;