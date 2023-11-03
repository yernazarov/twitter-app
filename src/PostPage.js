import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PostPage({ posts, setPosts }) {
  const { postId } = useParams();
  const post = posts.find(p => p.id.toString() === postId);
  const [isEditing, setIsEditing] = useState(true);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleLike = () => {
    // Increment likes for the post
  };

  const handleDislike = () => {
    // Increment dislikes for the post
  };

  const handleEdit = () => {
    // Update the post content
  };

  const handleDelete = () => {
    // Remove the post from the list
  };

  // Edit form displayed if isEditing is true
  const renderEditForm = () => (
    <div>
      <input 
        type="text" 
        value={editedContent} 
        onChange={(e) => setEditedContent(e.target.value)} 
      />
      <button onClick={() => handleEdit(postId, editedContent)}>Save</button>
    </div>
  );

  // Post content displayed if not editing
  const renderPostContent = () => (
    <div>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => handleDelete(postId)}>Delete</button>
    </div>
  );

  return (
    <div>
      <h1>Post</h1>
      {renderEditForm()}
      {renderPostContent()}
    </div>
  );
}

export default PostPage;
