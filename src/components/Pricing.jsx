import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    features: ['1 Project', 'Email Support'],
    popular: false,
  },
  {
    name: 'Standard',
    price: '$199',
    features: ['3 Projects', 'Priority Support'],
    popular: true, // Highlight this
  },
  {
    name: 'Elite',
    price: '$299',
    features: ['Unlimited Projects', '24/7 Support'],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Choose the plan that fits your business needs and scale effortlessly.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-blue-600 scale-105 bg-blue-50' : 'bg-gray-50'
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
