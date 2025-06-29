import React from 'react';
import { FaCode, FaShoppingCart, FaStore } from 'react-icons/fa';

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-600">Solutions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Solution 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Custom Software</h3>
            <p className="text-gray-600">
              Tailored web and mobile apps built to automate, scale, and empower your business.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaShoppingCart className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">eCommerce Solutions</h3>
            <p className="text-gray-600">
              Complete eCommerce setup including product pages, carts, payments, and admin dashboards.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaStore className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Online Store Setup</h3>
            <p className="text-gray-600">
              Launch your online presence with our Basic, Standard, or Elite store setup packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
