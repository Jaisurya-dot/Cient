 import React from "react";

const products = [
  {
    name: "Furniture",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
  },
  {
    name: "Modular Kitchen",
    image: "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976524.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
  },
  {
    name: "Wardrobes",
    image: "https://img.freepik.com/free-photo/mid-century-interior-design_23-2151902082.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
  },
  {
    name: "Silicone Products",
    image:  "https://img.freepik.com/free-photo/male-self-care-items-arrangement_23-2150347124.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
  },
  {
    name: "Other Products",
    image: "https://img.freepik.com/premium-photo/home-appliances-shopping-cart-cursor-e-commerce-online-shopping-concept-3d_505080-627.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
  },
  {
    name: "Office Chair",
    image: "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
  },
  {
    name: "Dining Table",
    image: "https://img.freepik.com/free-photo/home-interior-decorated-brown-shades_23-2151934914.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740",
  },
  {
    name: "Bookshelf",
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    name: "Sofa Set",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
  },
];

const ProductGallery = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Product Categories</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <div
          key={product.name + idx}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-fit rounded-md mb-4"
          />
          <div className="font-semibold text-lg text-gray-800">{product.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGallery;
