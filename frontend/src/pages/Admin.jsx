 import React, { useEffect, useState } from "react";
import { MdDelete, MdSearch, MdRefresh, MdFilterList, MdDashboard, MdArticle, MdDownload, MdVisibility } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContactStore } from "../store/contactstore.js";

const Admin = () => {
  const { fetchContacts, products, deleteProduct } = useContactStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      setError(null);
      try {
        await fetchContacts();
      } catch (err) {
        setError("Failed to load contacts");
        console.error(err);
      }
      setLoading(false);
    };
    getContacts();
  }, [fetchContacts]);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this contact? This action cannot be undone.")) return;
    
    setLoading(true);
    const { success, message } = await deleteProduct(userId);
    
    if (success) {
      toast.success(message || "Contact deleted successfully", { 
        transition: Slide,
        className: "bg-green-100 text-green-800"
      });
    } else {
      toast.error(message || "Failed to delete contact", { 
        transition: Slide,
        className: "bg-red-100 text-red-800"
      });
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await fetchContacts();
      toast.info("Data refreshed successfully", { transition: Slide });
    } catch (err) {
      toast.error("Failed to refresh data", { transition: Slide });
    }
    setLoading(false);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Product", "Message"];
    const csvContent = [
      headers.join(","),
      ...filteredAndSortedProducts.map(user => [
        user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A",
        `"${user.name || ""}"`,
        `"${user.email || ""}"`,
        `"${user.phone || ""}"`,
        `"${user.product || ""}"`,
        `"${(user.message || "").replace(/"/g, '""')}"`,
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  // Filter and sort logic
  const filteredAndSortedProducts = products
    .filter(user => {
      const matchesSearch = searchTerm === "" || 
        Object.values(user).some(value => 
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesFilter = filterBy === "all" || 
        (filterBy === "recent" && user.createdAt && 
         new Date(user.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      } else if (sortBy === "name") {
        return (a.name || "").localeCompare(b.name || "");
      }
      return 0;
    });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <ToastContainer 
        position="bottom-center" 
        autoClose={4000} 
        transition={Slide}
        className="mb-4"
        toastClassName="rounded-lg shadow-lg"
      />

      {/* Header Section */}
      <div className="w-full max-w-7xl mb-8">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-2 text-green-600 drop-shadow-lg">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Manage contacts and user interactions
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

      {/* Controls Section */}
      <div className="w-full max-w-7xl mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Contacts</option>
                <option value="recent">Recent (7 days)</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <MdRefresh className={`size-5 ${loading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              
              <button
                onClick={exportToCSV}
                disabled={filteredAndSortedProducts.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <MdDownload className="size-5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 flex gap-6 text-sm text-gray-600">
            <span>Total Contacts: <strong>{products.length}</strong></span>
            <span>Filtered Results: <strong>{filteredAndSortedProducts.length}</strong></span>
            <span>Recent (7 days): <strong>{products.filter(p => p.createdAt && new Date(p.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}</strong></span>
          </div>
        </div>
      </div>

      {/* Loading and Error States */}
      {loading && (
        <div className="flex items-center gap-3 text-green-600 mb-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
          <span className="font-medium">Loading contacts...</span>
        </div>
      )}
      
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* Table Section */}
      <div className="w-full max-w-7xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto max-h-[600px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-green-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedProducts.map((user, index) => (
                  <tr key={user._id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50 transition-colors`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.createdAt ? (
                        <div>
                          <div className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</div>
                          <div className="text-gray-500">{new Date(user.createdAt).toLocaleTimeString()}</div>
                        </div>
                      ) : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email ? (
                        <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                          {user.email}
                        </a>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.phone ? (
                        <a href={`tel:${user.phone}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                          {user.phone}
                        </a>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.product ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {user.product}
                        </span>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="line-clamp-2">
                        {user.message || "—"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleViewDetails(user)}
                          className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
                          title="View details"
                          aria-label={`View details for ${user.name || 'contact'}`}
                        >
                          <MdVisibility className="size-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="text-red-600 hover:text-red-800 transition-colors p-2 rounded-lg hover:bg-red-50"
                          title="Delete contact"
                          aria-label={`Delete ${user.name || 'contact'}`}
                        >
                          <MdDelete className="size-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredAndSortedProducts.length === 0 && !loading && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-3">
                        <MdFilterList className="size-12 text-gray-300" />
                        <div>
                          <p className="text-lg font-medium">No contacts found</p>
                          <p className="text-sm">Try adjusting your search or filter criteria</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for viewing details */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-[#000000b3] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedUser.name || "—"}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedUser.email || "—"}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedUser.phone || "—"}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedUser.product || "—"}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Submitted</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                    {selectedUser.createdAt ? new Date(selectedUser.createdAt).toLocaleString() : "—"}
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <p className="text-gray-900 bg-gray-50 p-4 rounded-lg min-h-[100px] whitespace-pre-wrap">
                  {selectedUser.message || "No message provided"}
                </p>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleDelete(selectedUser._id);
                    setShowModal(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;