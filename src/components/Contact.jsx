import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-white px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-6">
            <div className="text-left">
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-left">
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-left">
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
