import { useMemo, useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;
  const filteredProducts = useMemo(() => {
    let list = [...products];
    //search product
    if (search) {
      list = list.filter((p) =>
        p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    //filter category
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    // sort
    switch (sort) {
      case "newest":
        list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;

      case "oldest":
        list.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;

      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    return list;
  }, [search, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <div className="space-y-10">
      {/* Tạo banner lớn đầu page */}
      <div className="h-64 bg-[url(/bn3.jpg)] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Shop shoes</h1>
      </div>
      {/* search */}
      <div className="max-w-7xl mx-auto px-6 flex gap4">
        <input
          className="border px-4 py-2 flex-1"
          placeholder="Tìm kiếm giày của bạn ở đây..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-3"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Mới nhất</option>
          <option value="oldest">Cũ nhất</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
        </select>
      </div>
      {/* layout chia ra làm 2 cột */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
        {/* banner nhở và filter */}
        <div className="space-y-6">
          <div className="bg-pink-100 p-2 rounded-2xl">
            <h3 className="font-bold mb-4 text-blue-600 text-center text-2xl">
              Danh mục
            </h3>
            {[
              "all",
              "Giày Sneaker Nam",
              "Giày Sneaker Nữ",
              "Giày Sneaker Trẻ Em",
              "Giày Sneaker Thể Thao",
              "Giày Sneaker Thường Ngày",
              "Giày Sneaker Chạy Bộ",
              "Giày Sneaker Công Sở",
              "Giày Sneaker Dã Ngoại",
            ].map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`block w-full text-left px-3 py-2 rounded-2xl 
                     ${category === c ? "bg-green-700 text-white" : ""}`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
          <img src="bn2.jpg" alt="banner2" className="rounded-2xl" />
        </div>
        {/* product grid */}
        <div className="md:col-span-2 grid md:grid-cols-4 gap-6 self-start">
          {paginatedProducts.map((p) => (
            <div key={p.id} className="border p-4 rounded-2xl">
              <img
                src={p.img}
                alt={p.name}
                className="h-40 w-full object-cover"
              />
              <h3 className="mt-2 font-semibold text-blue-800">{p.name}</h3>

              <p className="text-xl text-red-600 text-center font-bold">
                {" "}
                {p.price.toLocaleString("vi-VN")} VNĐ
              </p>
              <div className="mt-auto flex gap-2">
                <Link
                  to={`/shop/${p.id}`}
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
      {/* Phân trang */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 ${
              page === i + 1 ? "bg-blue-700 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* Sản phẩm liên quan */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-600">
          Sản phẩm Mới nhất
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
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
                  to={`/shop/${p.id}`}
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

export default Shop;
