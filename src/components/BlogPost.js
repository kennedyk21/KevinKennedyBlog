import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Import the specific markdown file as JS module
        const postModule = await import(`../blog-posts/${postId}.js`);
        setContent(postModule.default || postModule);
      } catch (error) {
        console.error('Error loading post:', error);
        setContent('# Post Not Found\n\nThe requested blog post could not be found.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="blog-post">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="container">
        <div className="post-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        
        <div className="post-footer">
          <Link to="/" className="back-link">← Back to Blog</Link>
          <Link to="/about" className="about-link">About the Author →</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;