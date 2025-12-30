function Hero() {
  return (
    <section className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold loading-tight text-green-700">
            Premium Sneakers <br /> For Everyday style
          </h1>
          <p className="mt-5 text-gray-600 text-xl">
            Discover the best sneakers collection with comport, durability and
            model design.
          </p>
          <button className="mt-8 bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500">
            Shop Now
          </button>
        </div>
        <img src="./bn1.webp" alt="banner" className="rounded-2xl" />
      </div>
    </section>
  );
}

export default Hero;
