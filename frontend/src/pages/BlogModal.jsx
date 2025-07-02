 import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProductStore } from '../store/productstore.js';

// Reusable Input Component
const InputField = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block text-green-800 mb-1 font-medium">
      {label}
    </label>
    {props.type === 'textarea' ? (
      <textarea {...props} className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
    ) : (
      <input {...props} className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
    )}
  </div>
);

const BlogModal = ({ show, onClose }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createProduct } = useProductStore();
  const firstInputRef = useRef(null);

  // Focus the first input when modal opens
  useEffect(() => {
    if (show && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [show]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await createProduct({
        ...product,
        image: product.image || "https://placehold.co/600x400?text=No+Image"
      });
      
      if (result.success) {
        toast.success(result.message);
        setProduct({ title: "", description: "", image: "" });
        onClose();
      } else {
        toast.error(result.message || "Failed to create blog post.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.",error);
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
            Create New Blog Post
          </h3>
          <InputField
            label="Title"
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Title"
            required
            disabled={isSubmitting}
            ref={firstInputRef}
          />
          <InputField
            label="Description"
            type="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            required
            disabled={isSubmitting}
          />
          <InputField
            label="Image URL (optional)"
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
