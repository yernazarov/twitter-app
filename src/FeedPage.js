import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialPosts = [
  { id: 1, content: 'This is the first post', likes: 0, dislikes: 0 },
  // ... other posts
];

function FeedPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');

  const handleNewPost = () => {
    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      likes: 0,
      dislikes: 0
    };
    setPosts([...posts, newPost]);
    setNewPostContent('');
  };

  return (
    <div>
      <div className="header">
        <h1>Feed</h1>
      </div>
      <div className="feed">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <p>{post.content}</p>
            <Link className="link" to={`/post/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
      <div className="feed">
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button onClick={handleNewPost}>Post</button>
      </div>
    </div>
  );
}

export default FeedPage;
