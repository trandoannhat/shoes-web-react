import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { FaEye } from "react-icons/fa";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-x-16">
      {/*Phần Hero - Banner */}
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
          <img src="/bn3.jpg" alt="banner" className="rounded-2xl" />
        </div>
      </section>
      {/* Phần chính */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Phần gallery */}
        <div className="space-y-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={product.img}
                alt={product.name}
                className="h-20 w-full object-cover rounded-2xl border cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Phần thông tin */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-600">{product.name}</h1>
          <p className="text-gray-600 leading-relaxed"> {product.desc}</p>
          <p className="text-red-600 leading-relaxed font-bold">
            Price : {product.price.toLocaleString("vi-VN")} VNĐ
          </p>
          <div className="flex gap-4">
            <button className="flex-1 bg-green-500 text-white py-3 rounded-2xl font-bold text-lg hover:bg-green-800">
              Add To Cart
            </button>
            <button className="flex-1 border bg-yellow-500 text-white py-3 rounded-2xl font-bold text-lg hover:bg-yellow-800">
              Buy Now
            </button>
          </div>
          <div className="border-t pt-4 text-sm text-gray-500">
            <p>
              Category : <b>{product.category}</b>{" "}
            </p>
            <p>CreatedAt : {product.createdAt}</p>
          </div>
        </div>
      </div>
      {/* Phần sản phẩm tương tự */}
      <div className="mt-5">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
          SẢN PHẨM TƯƠNG TỰ
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {relatedProducts.slice(0, 4).map((p) => (
            <div key={p.id} className="border p-4 rounded-2xl">
              <img
                src={p.img}
                alt={p.name}
                className="h-40 w-full object-cover"
              />
              <h3 className="mt-2 font-semibold text-violet-700">{p.name}</h3>
              <p className="text-xl text-red-600 text-center font-bold">
                {" "}
                {p.price.toLocaleString("vi-VN")} VNĐ
              </p>
              <div className="mt-auto flex gap-2">
                <Link
                  to={`/productdetail/${p.id}`}
                  className="flex flex-1 items-center font-bold justify-center gap-2 border border-emerald-800 text-green-600 rounded-2xl"
                >
                  <FaEye /> Chi tiết
                </Link>
              </div>
              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-2xl">
                Thêm giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
