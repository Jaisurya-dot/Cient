 import React, { useState } from 'react';
import { MdAdd, MdDashboard, MdArticle } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogModal from './BlogModal';
import Blog1 from '../component/Blog1';

const BlogUpdatePage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <section className='flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-green-50 to-white'>
      <ToastContainer 
        position="bottom-center" 
        autoClose={4000} 
        transition={Slide}
        className="mb-4"
        toastClassName="rounded-lg shadow-lg"
      />
      
      {/* Header Section */}
      <div className='relative top-6 w-full max-w-6xl px-4'>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2 text-green-600 drop-shadow-lg">
            Blog Management
          </h1>
          <p className="text-gray-600 text-lg">
            Create, edit, and manage your blog posts
          </p>
        </div>
        
        {/* Enhanced Navigation */}
        <nav className="w-full mb-8">
          <div className="flex justify-center">
            <ul className="flex gap-4 bg-white rounded-xl shadow-lg p-2">
              <li>
                <Link 
                  to="/BlogUpdate" 
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isActiveRoute('/BlogUpdate')
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-green-700 hover:bg-green-50 hover:text-green-800'
                  }`}
                >
                  <MdArticle className="size-5" />
                  <span>Blog Update</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/AdminApi_key!234csacsybaybAbBbbncuuu25686wddby" 
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isActiveRoute('/AdminApi_key!234csacsybaybAbBbbncuuu25686wddby')
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-green-700 hover:bg-green-50 hover:text-green-800'
                  }`}
                >
                  <MdDashboard className="size-5" />
                  <span>Admin Panel</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Action Button Section */}
      <div className="w-full max-w-7xl px-8 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Your Blog Posts
            </h2>
            <p className="text-gray-600">
              Manage and organize your content
            </p>
          </div>
          
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            aria-label="Create new blog post"
          >
            <MdAdd className="size-6" />
            <span className="font-semibold">Create New Post</span>
          </button>
        </div>
      </div>
      
      {/* Blog Modal */}
      <BlogModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
      
      {/* Blog Content */}
      <div className="w-full max-w-7xl px-4 pb-8">
        <Blog1 showActions={true} />
      </div>
      
      {/* Loading State Indicator (optional enhancement) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-40 pointer-events-none" />
      )}
    </section>
  );
};

export default BlogUpdatePage;