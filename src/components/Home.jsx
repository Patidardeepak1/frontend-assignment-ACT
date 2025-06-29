import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white px-6 md:px-12"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
            Transform Your Business with <span className="text-blue-500">ACT</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            We empower startups and enterprises with cutting-edge digital solutions — from scalable eCommerce to tailor-made software that grows with your goals.
          </p>
          <div className="pt-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://si-interactive.s3.amazonaws.com/prod/planadviser-com/wp-content/uploads/2024/09/25092039/PA-092524-Wealth-Staffing-for-401ks-1197500059.jpg"
            alt="ACT Illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
