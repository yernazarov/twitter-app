import React, { useState } from 'react';

function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'This is a bio'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editedUser.name} 
            onChange={(e) => setEditedUser({...editedUser, name: e.target.value})} 
          />
          <textarea 
            value={editedUser.bio} 
            onChange={(e) => setEditedUser({...editedUser, bio: e.target.value})} 
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
