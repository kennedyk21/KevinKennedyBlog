import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // List of available blog posts - you can add your own here
    const availablePosts = [
      'welcome-to-my-blog',
      'learning-react',
      'thoughts-on-web-development'
    ];

    // Load each post and extract information
    const loadPosts = async () => {
      const posts = [];
      
      for (const postId of availablePosts) {
        try {
          const postModule = await import(`../blog-posts/${postId}.js`);
          const content = postModule.default || postModule;
          const lines = content.split('\n');
          const title = lines[0].replace('# ', '') || postId;
          const excerpt = lines.slice(1, 4).join(' ').substring(0, 150) + '...';
          
          posts.push({
            id: postId,
            title,
            excerpt,
            content
          });
        } catch (error) {
          console.error(`Error loading post ${postId}:`, error);
        }
      }
      
      setBlogPosts(posts);
    };

    loadPosts();
  }, []);

  return (
    <div className="homepage">
      <div className="container">
        <h1>Welcome to My Blog</h1>
        <p className="subtitle">Thoughts, experiences, and insights</p>
        
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              <h2>
                <Link to={`/post/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="read-more">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;