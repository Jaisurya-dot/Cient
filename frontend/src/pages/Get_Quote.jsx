 import React, { useState } from "react";

// Star Rating Component
function StarRating({ value, onChange }) {
  return (
    <div className="flex items-center space-x-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="focus:outline-none"
          aria-label={`${star} Star${star > 1 ? "s" : ""}`}
        >
          <svg
            className={`w-7 h-7 transition ${
              value >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

const initialForm = {
  buyerSupplierType: "",
  name: "",
  company: "",
  address: "",
  cityStateCountry: "",
  email: "",
  phone: "",
  productName: "",
  productDescription: "",
  specifications: "",
  quantity: "",
  otherDetails: "",
  minOrderQty: "",
  paymentTerms: "",
  shippingTime: "",
  shippingMethod: "",
  websiteFeedback: 0,
};

export default function GetQuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [customShippingTime, setCustomShippingTime] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [starError, setStarError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarChange = (rating) => {
    setForm({ ...form, websiteFeedback: rating });
    setStarError(false);
  };

  const handleShippingTimeChange = (e) => {
    if (e.target.value === "custom") {
      setShowCustom(true);
      setForm({ ...form, shippingTime: customShippingTime });
    } else {
      setShowCustom(false);
      setForm({ ...form, shippingTime: e.target.value });
    }
  };

  const handleCustomShippingTime = (e) => {
    setCustomShippingTime(e.target.value);
    setForm({ ...form, shippingTime: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.websiteFeedback === 0) {
      setStarError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    alert("Quote request submitted!");
    setForm(initialForm);
    setCustomShippingTime("");
    setShowCustom(false);
    setStarError(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-8 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl space-y-8"
        autoComplete="on"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">Get Quote</h1>
          <p className="text-gray-500 text-lg">Request a professional quotation for your Export/Import needs</p>
        </div>

        {/* Supplier Information Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">1. Supplier Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">I am a</label>
              <select
                name="buyerSupplierType"
                value={form.buyerSupplierType}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
                required
              >
                <option value="" disabled>Select Buyer/Supplier</option>
                <option value="Buyer">Buyer</option>
                <option value="Supplier">Supplier</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                autoComplete="organization"
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">City / State / Country</label>
              <input
                type="text"
                name="cityStateCountry"
                value={form.cityStateCountry}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                pattern="[0-9\-+\s()]*"
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Product Details Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">2. Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                value={form.productName}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Product Description</label>
              <input
                type="text"
                name="productDescription"
                value={form.productDescription}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Specifications</label>
              <input
                type="text"
                name="specifications"
                value={form.specifications}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Other Details</label>
              <input
                type="text"
                name="otherDetails"
                value={form.otherDetails}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Payment Terms Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">3. Payment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Minimum Order Quantity (MOQ)</label>
              <input
                type="number"
                name="minOrderQty"
                min="1"
                value={form.minOrderQty}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Payment Terms Preferred</label>
              <input
                type="text"
                name="paymentTerms"
                value={form.paymentTerms}
                onChange={handleChange}
                required
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Shipping & Delivery Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">4. Shipping & Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Estimated Shipping Time</label>
              <select
                id="shippingTime"
                name="shippingTime"
                value={showCustom ? "custom" : form.shippingTime}
                onChange={handleShippingTimeChange}
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
                required
              >
                <option value="" disabled>Select Estimated Time</option>
                <option value="3-5 Days">3-5 Days</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="3-4 Weeks">3-4 Weeks</option>
                <option value="Over 1 Month">Over 1 Month</option>
                <option value="custom">Custom...</option>
              </select>
              {showCustom && (
                <div className="mt-3">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Enter custom shipping time</label>
                  <input
                    type="text"
                    name="customShippingTime"
                    value={customShippingTime}
                    onChange={handleCustomShippingTime}
                    required
                    className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Shipping Method</label>
              <select
                name="shippingMethod"
                id="shippingMethod"
                value={form.shippingMethod}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg py-3 px-3 text-gray-900 focus:border-blue-600 focus:outline-none transition"
                required
              >
                <option value="" disabled>Select Shipping Method</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Sea Freight">Sea Freight</option>
                <option value="Courier">Courier</option>
                <option value="Rail">Rail</option>
                <option value="Road">Road</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Website Feedback */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Website Feedback</h2>
          <StarRating value={form.websiteFeedback} onChange={handleStarChange} />
          {starError && (
            <div className="text-red-600 mt-1 text-sm">Please provide a star rating.</div>
          )}
          <span className="ml-2 text-gray-500">
            {form.websiteFeedback ? `You rated ${form.websiteFeedback}/5` : "No rating yet"}
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
          >
            Request Quote
          </button>
        </div>
      </form>
    </div>
  );
}
