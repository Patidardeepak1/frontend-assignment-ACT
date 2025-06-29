import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQs() {
  const faqs = [
    {
      q: 'What services do you provide?',
      a: 'We offer software development, eCommerce store setup, and custom digital solutions tailored to your business needs.',
    },
    {
      q: 'Can I upgrade my plan later?',
      a: 'Absolutely! You can upgrade anytime and the changes will take effect instantly with no service interruption.',
    },
    {
      q: 'Do you provide support after deployment?',
      a: 'Yes. All our plans include post-deployment support. Elite plan includes 24/7 priority support.',
    },
    {
      q: 'How long does it take to build a custom project?',
      a: 'Depending on complexity, a project can take 1–6 weeks. We always share an estimated timeline before starting.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition duration-200 hover:shadow-lg"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-800">{item.q}</h4>
                {openIndex === i ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              {openIndex === i && (
                <p className="mt-3 text-gray-600 transition duration-200">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
