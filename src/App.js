import React from 'react';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-8">
        <BlogList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
