import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto p-4">
                <p className="text-white text-lg font-bold">Link to Github repo <a className="text-white underline" href="https://github.com/brennan-jenkins/wizz-blog">Here</a></p>
            </div>
        </footer>
    );
};

export default Footer;