const categories = [
  { name: "Men Sneakers", image: "/cat1.webp" },
  { name: "Women Sneakers", image: "/cat2.webp" },
  { name: "Kids Sneakers", image: "/cat3.webp" },
  { name: "Sports Sneakers", image: "/cat4.webp" },
  { name: "Casual Sneakers", image: "/cat5.webp" },
  { name: "Running Sneakers", image: "/cat6.webp" },
  { name: "Formal Sneakers", image: "/cat7.webp" },
  { name: "Outdoor Sneakers", image: "/cat8.webp" },
];
function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl text-red-600 font-bold mb-6">
        Featured Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="absolute inset-0 bg-slate-400/40 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturedCategories;
