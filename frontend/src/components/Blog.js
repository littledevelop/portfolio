import React from 'react';
import { Card, Row, Col } from 'antd';
import '../common.css';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'Learn how React Hooks simplify state management and side effects in functional components.',
    image: 'src/image/reacthook.jpeg',
    link: '/blog/react-hooks',
  },
  {
    id: 2,
    title: 'Getting Started with Ant Design',
    description: 'A beginner-friendly guide to building beautiful UIs with Ant Design.',
    image: 'src/image/antdesign.jpeg',
    link: '/blog/ant-design',
  },
  {
    id: 3,
    title: 'Mastering JavaScript ES6+ Features',
    description: 'Explore the latest JavaScript features and how they can improve your code.',
    image: 'src/image/javascriptes6.jpeg',
    link: '/blog/javascript-es6',
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">My Blog</h1>
      <Row gutter={[16, 16]}>
        {blogPosts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card
              hoverable
              cover={<img alt={post.title} src={post.image} />}
              className="blog-card"
            >
              <Card.Meta
                title={post.title}
                description={post.description}
              />
              <a href={post.link} className="read-more">
                Read More →
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
