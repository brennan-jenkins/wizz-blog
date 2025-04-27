import React from 'react';

interface BlogCardProps {
    title: string;
    content: string;
    author: string;
    date: string;
    thumb: string;
    link: string;
    id:string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, author, date, thumb, link, id }) => {
    return (
        <a href={`https://www.futwiz.com/en/news/article/${link}/${id}`} className="block">
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={thumb} alt="" />
            <h2 className="text-xl font-bold text-gray-600 hover:text-gray-900">{title}</h2>
            <p className="text-gray-600">{content}</p>
            <div className="mt-2 text-sm text-gray-400">
                <p>{date}</p>
            </div>
            </div>
        </a>
    );
};

export default BlogCard;