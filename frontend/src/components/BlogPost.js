import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 'react-hooks',
    title: 'Understanding React Hooks',
    content: 'React Hooks are functions that let you use state and other React features in functional components. They simplify state management and side effects in React applications.',
    image: 'https://via.placeholder.com/300x200.png?text=React+Hooks',
  },
  {
    id: 'ant-design',
    title: 'Getting Started with Ant Design',
    content: 'Ant Design is a popular React UI library that provides a set of high-quality components for building beautiful and responsive user interfaces.',
    image: 'https://via.placeholder.com/300x200.png?text=Ant+Design',
  },
  {
    id: 'javascript-es6',
    title: 'Mastering JavaScript ES6+ Features',
    content: 'JavaScript ES6 introduced several new features like arrow functions, destructuring, template literals, and more, which make coding more efficient and readable.',
    image: 'https://via.placeholder.com/300x200.png?text=JavaScript+ES6',
  },
];

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const post = blogPosts.find((post) => post.id === id); // Find the blog post by ID

  if (!post) {
    return <h1>404 - Blog Post Not Found</h1>; // Handle invalid IDs
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;