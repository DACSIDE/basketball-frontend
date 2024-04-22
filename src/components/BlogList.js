import React from 'react';
import BlogPost from './BlogPost';

function BlogList() {
  // Sample data, replace with your actual blog posts data
  const blogPosts = [
    { id: 1, title: "First Blog Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Second Blog Post", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // Add more blog posts as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
