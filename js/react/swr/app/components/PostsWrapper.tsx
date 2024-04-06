'use client';
import { useState } from 'react';
import Posts from './Posts';

function PostsWrapper() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Posts pageIndex={pageIndex} />
      {/* 
      The div below is great for increased user experience since whenever one page loads, 
      we pre-load the second one, making subsequent requests look like they're instant! */}
      <div style={{ display: 'none' }}>
        <Posts pageIndex={pageIndex + 1} />
      </div>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}

export default PostsWrapper;
