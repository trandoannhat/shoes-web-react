import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Men Sneakers",
    price: "$120",
    image: "/cat1.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Women Sneakers",
    price: "$140",
    image: "/cat2.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Kids Sneakers",
    price: "$90",
    image: "/cat3.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Sports Sneakers",
    price: "$160",
    image: "/cat4.webp",
    icon: <FaShoppingCart size={32} />,
  },
];

function BestSeller() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-orange-600 font-bold mb-6">Best Sellers</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <Link to={"/shop"}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-2xl"
              />
            </Link>
            <Link to={"/shop"}>
              <h3 className="font-semibold mt-3">{item.name}</h3>
            </Link>
            <p className="text-gray-500">{item.price}</p>
            <button
              className="mt-4 w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded-2xl text-center 
            flex items-center justify-center gap-2 transition-all duration-200 "
            >
              {item.icon}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
