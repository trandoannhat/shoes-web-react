function BannerSale() {
  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
        {/* Background image */}
        <img
          src="/cat1.webp"
          alt="Sale Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center pl-8">
          <div className="px-8 md:px-16 text-white">
            <h2 className="text-2xl text-white font-bold">Sneaker Sale</h2>
            <p className="text-white">Up to 50% Off</p>
          </div>
        </div>
      </div>

      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
        {/* Background image */}
        <img
          src="/cat2.webp"
          alt="Sale Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center pl-8">
          <div className="px-8 md:px-16 text-white">
            <h2 className="text-2xl text-white font-bold">New Collection</h2>
            <p className="text-white">Design Your Style</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSale;
