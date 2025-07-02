 import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useProductStore } from '../store/productstore.js';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Modal for reading full blog post
const ReadMoreModal = ({ show, onClose, blog }) => {
  if (!show || !blog) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl" />
          <div className="absolute bottom-6 left-6 right-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              {blog.title}
            </h2>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.description}
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {blog.title.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Blog Author</p>
                  <p className="text-sm text-gray-500">Published recently</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal for updating a blog post
const UpdateBlogModal = ({ show, onClose, blog, onUpdate }) => {
  const [form, setForm] = useState({ title: '', description: '', image: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (show && blog) {
      setForm({
        title: blog.title || '',
        description: blog.description || '',
        image: blog.image || ''
      });
    }
  }, [show, blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only proceed if changes are made
    const isChanged =
      form.title !== blog.title ||
      form.description !== blog.description ||
      (form.image || '') !== (blog.image || '');

    if (!isChanged) {
      onClose();
      return;
    }

    if (!form.title.trim() || !form.description.trim()) {
      toast.warning('Title and description are required!');
      return;
    }

    setIsSubmitting(true);
    try {
      await onUpdate({
        ...blog,
        title: form.title,
        description: form.description,
        image: form.image || 'https://placehold.co/600x400?text=No+Image'
      });
      toast.success('Blog post updated successfully!', { transition: Slide });
      onClose();
    } catch (error) {
      toast.error('Failed to update blog post',error, { transition: Slide });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center mt-10 justify-center bg-[#00000090] bg-opacity-40"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3 className="text-2xl font-semibold mb-4 text-green-800">
            Update Blog Post
          </h3>
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 mb-1 font-medium">Image URL (optional)</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Blog1 = ({ showActions = false }) => {
  const { fetchProducts, products, deleteProduct, updateProduct } = useProductStore();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteProduct(id);
        toast.success("Blog post deleted successfully!", { transition: Slide });
      } catch (error) {
        toast.error("Failed to delete blog post",error, { transition: Slide });
      }
    }
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setShowUpdateModal(true);
  };

  const handleReadMore = (blog) => {
    setCurrentBlog(blog);
    setShowReadMoreModal(true);
  };

  const handleUpdate = async (updatedBlog) => {
    try {
      await updateProduct(updatedBlog);
      fetchProducts(); // Refresh the list after update
    } catch (error) {
      // Toast handled in modal
    }
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (!products || products.length === 0) {
    return <div className="w-full min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className='flex flex-col items-center w-full min-h-screen bg-white'>
      <ToastContainer position="bottom-center" autoClose={4000} transition={Slide} />

      {/* Update Modal */}
      <UpdateBlogModal
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        blog={currentBlog}
        onUpdate={handleUpdate}
      />

      {/* Read More Modal */}
      <ReadMoreModal
        show={showReadMoreModal}
        onClose={() => setShowReadMoreModal(false)}
        blog={currentBlog}
      />

      {/* Top Card */}
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={cardVariants}
        viewport={{ once: true, margin: "-80px" }}
        className='flex flex-col md:flex-row gap-8 p-8 w-full max-w-7xl'
      >
        <img
          src={products[0].image}
          alt={products[0].title}
          className='rounded-lg w-full md:w-1/2 object-cover h-96 cursor-pointer hover:opacity-90 transition-opacity'
          onClick={() => handleReadMore(products[0])}
        />
        <div className='flex flex-col gap-5 bg-[#fcfdf8] p-8 md:p-10 rounded-2xl shadow-2xl w-full md:w-1/2'>
          <h1 className='text-2xl font-bold cursor-pointer hover:text-green-600 transition-colors' onClick={() => handleReadMore(products[0])}>
            {products[0].title}
          </h1>
          <p className='text-gray-600'>{truncateText(products[0].description, 200)}</p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              onClick={() => handleReadMore(products[0])}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Read More
            </button>
            
            {showActions && (
              <>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => handleEdit(products[0])}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => handleDelete(products[0]._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Bottom Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full max-w-7xl'>
        {products.slice(1).map((post) => (
          <motion.div
            key={post._id}
            whileInView="visible"
            initial="hidden"
            variants={cardVariants}
            viewport={{ once: true, margin: "-80px" }}
            className='flex flex-col items-center group'
          >
            <img
              src={post.image}
              alt={post.title}
              className='rounded-xl h-60 w-full object-cover transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg'
              onClick={() => handleReadMore(post)}
            />
            <div className='flex flex-col gap-5 bg-[#fcfdf8] p-6 -mt-16 rounded-2xl shadow-lg w-[90%] transition-all duration-300 group-hover:shadow-xl'>
              <h1 className='text-xl font-bold cursor-pointer hover:text-green-600 transition-colors' onClick={() => handleReadMore(post)}>
                {post.title}
              </h1>
              <p className='text-gray-600 line-clamp-3'>{truncateText(post.description)}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm flex items-center gap-1"
                  onClick={() => handleReadMore(post)}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Read More
                </button>
                
                {showActions && (
                  <>
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
                      onClick={() => handleEdit(post)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog1;