 import { FaMapMarkerAlt } from "react-icons/fa";

export default function AddressSection() {
  return (
    <div className="flex items-center justify-center p-5 bg-gray-50 px-2">
      <section className="w-full max-w-6xl rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-[#607b80] to-gray-50 overflow-hidden flex flex-col md:flex-row-reverse ">
        {/* Map Panel */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
          <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.8609997024794!2d116.40739431524216!3d39.90419977942113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f052d8459a3ab7%3A0x61a4e5ab37cd660e!2sBeijing%2C%20China!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[220px] md:h-[340px]"
            ></iframe>
          </div>
        </div>
        {/* Address Panel */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 bg-white">
          <h2 className="text-2xl font-bold text-blue-800 mb-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> Our Beijing Office
          </h2>
          <div className="mb-4">
            <span className="block font-semibold text-lg text-gray-900">Sino India Jeda Trading</span>
            <span className="block text-gray-700">
              21st Floor, Tower A, Fortune Plaza,<br />
              No. 7 Dongsanhuan Zhonglu,<br />
              Chaoyang District, Beijing 100020,<br />
              China
            </span>
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Phone:</span> +86 10 1234 5678
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Email:</span> info@sinoindiajeda.com
          </div>
          <div className="text-gray-700">
            <span className="font-semibold">Hours:</span> Mon–Fri, 9:00am – 6:00pm
          </div>
        </div>
      </section>
    </div>
  );
}
