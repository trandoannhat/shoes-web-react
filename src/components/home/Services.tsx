import { FaHeadset, FaLock, FaShippingFast, FaUndo } from "react-icons/fa";

const services = [
  {
    title: "Free Shipping",
    description: "Get free shipping on orders over $50.",
    icon: <FaShippingFast size={32} />,
    bg: "bg-green-100",
  },
  {
    title: "24/7 Support",
    description: "Our support team is here to help you anytime.",
    icon: <FaHeadset size={32} />,
    bg: "bg-yellow-100",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days of purchase.",
    icon: <FaUndo size={32} />,
    bg: "bg-red-100",
  },
  {
    title: "Secure Payment",
    description: "Your payment information is safe with us.",
    icon: <FaLock size={32} />,
    bg: "bg-blue-100",
  },
];

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} p-6 rounded-2xl text-center flex flex-col items-center`}
          >
            <div className="mb-4 text-red-700">{service.icon}</div>
            <h3 className="font-bold text-2xl text-blue-600">
              {service.title}
            </h3>
            <p className="text-sm text-orange-600 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
