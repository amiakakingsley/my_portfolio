import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9090/all_blog")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading blogs...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
             <Link to={"/"}>Home</Link>
            <h2>Blog List</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h2>{blog.name}</h2>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayBlog;
