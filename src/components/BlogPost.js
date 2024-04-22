import React from 'react';

function BlogPost({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <a href="/blog/1" className="text-blue-500 mt-4 inline-block">Read More</a>
    </div>
  );
}

export default BlogPost;
