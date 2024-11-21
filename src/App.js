import React, { useState, lazy, Suspense } from 'react';
import PostList from './components/PostList';
import './styles.css';

const PostDetails = lazy(() => import('./components/PostDetails'));

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleClose = () => {
    setSelectedPostId(null);
  };

  return (
    
    <div className="App">
      <div className="post-list">
        <PostList onPostClick={handlePostClick} />
      </div>
      {selectedPostId && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostDetails postId={selectedPostId} onClose={handleClose} />
          </Suspense>
      
      )}
    </div>
  );
}

export default App;
