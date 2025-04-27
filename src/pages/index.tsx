import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import fetcher from '../utils/fetcher';

const Home = () => {
  const [blogs, setBlogs] = useState<{ id: string; [key: string]: any }[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetcher('https://www.futwiz.com/en/dev/test');
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Feed</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard 
              id={blog.id}
              key={blog.id}
              title={blog.title} 
              content={blog.content} 
              author={blog.author} 
              date={blog.date} 
              thumb={blog.thumbnail}
              link={blog.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;