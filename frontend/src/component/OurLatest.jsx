// src/components/Deals.jsx
import React from "react";

const deals = [
  {
    title: "Morocco dreams",
    offer: "30% OFF",
    code: "Groovytravel",
    days: "12 days",
    price: "$389 USD",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Summer in Holland",
    offer: "20% OFF",
    code: "Groovy20",
    days: "15 days",
    price: "$420 USD",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Deals() {
  return (
    <div className="w-full flex flex-col items-center mt-8 p-10">
      <h2 className="text-2xl md:text-3xl font-light mb-8">
        Our latest <span className="font-bold text-teal-500">deals</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {deals.map((deal) => (
          <div
            key={deal.title}
            className="relative bg-teal-50 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row w-[350px] md:w-[430px] h-[250px]"
          >
            <div className="flex-1 flex flex-col justify-between p-6 z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {deal.title.split(" ").map((word, i) =>
                    i === 1 ? (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h3>
                <div className="bg-white rounded-lg px-4 py-2 shadow text-center mb-3 w-fit">
                  <span className="block text-sm text-gray-500">
                    Special offer
                  </span>
                  <span className="block text-xl font-bold text-gray-800">
                    {deal.offer}
                  </span>
                  <span className="block text-xs border rounded px-2 py-0.5 border-gray-300 mt-1 text-gray-600">
                    Code: {deal.code}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-2">
                  From <span className="font-bold">{deal.price}</span>
                </div>
                <button className="bg-teal-500 text-white rounded px-4 py-2 text-sm font-semibold hover:bg-teal-600 transition">
                  Contact agent
                </button>
              </div>
            </div>
            <img
              src={deal.image}
              alt={deal.title}
              className="absolute right-0 top-0 w-1/2 h-full object-cover z-0"
              style={{ borderRadius: "0 12px 12px 0" }}
            />
            <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-4 py-1 rounded-md font-semibold z-20">
              {deal.days}
            </span>
            {/* Overlay shape for the left side */}
            <svg
              className="absolute right-1/2 top-0 h-full w-20 z-10"
              viewBox="0 0 80 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M80 0C40 50 40 200 80 250V0Z"
                fill="#e0f7f4"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
