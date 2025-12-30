import { FaShoppingCart } from "react-icons/fa";

const product = [
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
  {
    name: "Men Sneakers",
    price: "$120",
    image: "/cat5.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Women Sneakers",
    price: "$140",
    image: "/cat6.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Kids Sneakers",
    price: "$90",
    image: "/cat7.webp",
    icon: <FaShoppingCart size={32} />,
  },
  {
    name: "Sports Sneakers",
    price: "$160",
    image: "/cat8.webp",
    icon: <FaShoppingCart size={32} />,
  },
];
function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-green-600 font-bold mb-6">All Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {product.map((p, index) => (
          <div key={index} className="border rounded-2xl p-4">
            <img
              src={p.image}
              alt="sports"
              className="w-full h-48 object-cover rounded-2xl"
            />

            <h3 className="font-semibold mt-3">{p.name}</h3>
            <p className="text-gray-500">{p.price}</p>

            <button className="mt-3 w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded-2xl flex items-center justify-center gap-2">
              <FaShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
