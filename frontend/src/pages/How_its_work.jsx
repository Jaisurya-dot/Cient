 import React from 'react';

const steps = [
  {
    title: "1. Clearly Define Your Product Requirements",
    description: `Before you contact any supplier, make sure you have a detailed brief that includes:

- Exact product specifications (size, color, materials, features)
- Required quality standards and certifications
- Expected order quantity
- Packaging and labeling needs

Clear, detailed requirements help prevent misunderstandings and costly mistakes later in the process.`
  },
  {
    title: "2. Select Verified and Trusted Suppliers",
    description: `Supplier reliability is critical. We recommend:

- Verifying business licenses and certifications
- Checking references and independent reviews
- Using platforms with supplier verification (like Alibaba Gold Supplier or Made-in-China Audited Supplier)
- Working with a sourcing partner who has a local, on-ground team

At Sino India Jeda Trading, our Beijing team personally vets every supplier in our network, so you always work with trusted partners.`
  },
  {
    title: "3. Request Samples and Conduct Quality Checks",
    description: `Never skip the sampling phase. Always:

- Request product samples before placing a bulk order
- Arrange for factory audits and in-process inspections
- Conduct pre-shipment quality checks

This approach ensures your products consistently meet your expectations.`
  },
  {
    title: "4. Negotiate Terms Wisely",
    description: `Price is just one part of the equation. Also negotiate:

- Unit pricing and discounts for larger orders
- Payment terms (e.g., 30% deposit, 70% upon shipment)
- Delivery schedules and incoterms (FOB, CIF, DDP)
- After-sales support

Transparent, well-negotiated agreements build long-term supplier relationships.`
  },
  {
    title: "5. Plan Logistics and Customs in Advance",
    description: `Efficient shipping from China to India requires:

- Booking the right freight (sea, air, or courier)
- Preparing all export/import documentation
- Clearing customs and paying duties

Our team helps you manage these steps to avoid delays and unexpected costs.`
  },
  {
    title: "6. Maintain Regular Communication",
    description: `Stay in touch with your supplier or sourcing agent at every stage. Use email, WhatsApp, or WeChat for real-time updates, and always request:

- Production photos
- Inspection reports
- Shipping documents

Regular updates keep your project on track.`
  }
];

const conclusion = `Sourcing from China can accelerate your business growth—if you do it right. By following these steps and partnering with experts like Sino India Jeda Trading, you minimize risks and maximize your success.`;

const cta = `Need help with your next import?
Contact Sino India Jeda Trading for end-to-end sourcing support, from supplier verification to doorstep delivery.`;

const social = `Stay tuned for more tips and insights on global sourcing.
Follow us on LinkedIn, Facebook, and Twitter for the latest updates.`;

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">How It Works</h1>
        {steps.map((step, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{step.title}</h2>
            <div className="text-gray-700 space-y-2">
              {step.description.split('\n').map((line, i) =>
                line.startsWith('-') ? (
                  <li key={i} className="ml-6 list-disc">{line.replace(/^- /, '')}</li>
                ) : line.trim() === '' ? (
                  <br key={i} />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
          </section>
        ))}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Conclusion</h2>
          <p className="text-gray-700">{conclusion}</p>
        </section>
        <section className="mb-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
          <p className="font-semibold text-blue-800 mb-2 whitespace-pre-line">{cta}</p>
        </section>
        <section className="text-gray-600 text-center">
          <p className="mb-2 whitespace-pre-line">{social}</p>
        </section>
      </div>
    </div>
  );
}
