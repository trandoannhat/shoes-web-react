import type { ReactNode } from "react";
import { FaShoppingCart } from "react-icons/fa";

export type ProductCategory =
  | "Giày Sneaker Nam"
  | "Giày Sneaker Nữ"
  | "Giày Sneaker Trẻ Em"
  | "Giày Sneaker Thể Thao"
  | "Giày Sneaker Thường Ngày"
  | "Giày Sneaker Chạy Bộ"
  | "Giày Sneaker Công Sở"
  | "Giày Sneaker Dã Ngoại";

export type Product = {
  id: number;
  name: string;
  price: number; // dùng number để dễ xử lý sau này
  category: ProductCategory;
  img: string;
  createdAt: string;
  icon: ReactNode;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Giày Sneaker Nam Basic",
    price: 1200000,
    category: "Giày Sneaker Nam",
    img: "/cat1.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 2,
    name: "Giày Sneaker Nữ Thời Trang",
    price: 1150000,
    category: "Giày Sneaker Nữ",
    img: "/cat2.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 3,
    name: "Giày Sneaker Trẻ Em Năng Động",
    price: 850000,
    category: "Giày Sneaker Trẻ Em",
    img: "/cat3.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 4,
    name: "Giày Sneaker Thể Thao Chuyên Dụng",
    price: 1350000,
    category: "Giày Sneaker Thể Thao",
    img: "/cat4.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 5,
    name: "Giày Sneaker Thường Ngày",
    price: 1100000,
    category: "Giày Sneaker Thường Ngày",
    img: "/cat5.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 6,
    name: "Giày Sneaker Chạy Bộ Nhẹ",
    price: 1400000,
    category: "Giày Sneaker Chạy Bộ",
    img: "/cat6.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 7,
    name: "Giày Sneaker Công Sở Cao Cấp",
    price: 1600000,
    category: "Giày Sneaker Công Sở",
    img: "/cat7.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 8,
    name: "Giày Sneaker Dã Ngoại",
    price: 1700000,
    category: "Giày Sneaker Dã Ngoại",
    img: "/cat8.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 9,
    name: "Giày Sneaker Nam Basic",
    price: 1200000,
    category: "Giày Sneaker Nam",
    img: "/cat1.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 10,
    name: "Giày Sneaker Nữ Thời Trang",
    price: 1150000,
    category: "Giày Sneaker Nữ",
    img: "/cat2.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 11,
    name: "Giày Sneaker Trẻ Em Năng Động",
    price: 850000,
    category: "Giày Sneaker Trẻ Em",
    img: "/cat3.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 12,
    name: "Giày Sneaker Thể Thao Chuyên Dụng",
    price: 1350000,
    category: "Giày Sneaker Thể Thao",
    img: "/cat4.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 13,
    name: "Giày Sneaker Thường Ngày",
    price: 1100000,
    category: "Giày Sneaker Thường Ngày",
    img: "/cat5.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 14,
    name: "Giày Sneaker Chạy Bộ Nhẹ",
    price: 1400000,
    category: "Giày Sneaker Chạy Bộ",
    img: "/cat6.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 15,
    name: "Giày Sneaker Công Sở Cao Cấp",
    price: 1600000,
    category: "Giày Sneaker Công Sở",
    img: "/cat7.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
  {
    id: 16,
    name: "Giày Sneaker Dã Ngoại",
    price: 1700000,
    category: "Giày Sneaker Dã Ngoại",
    img: "/cat8.webp",
    createdAt: "2024-12-14",
    icon: <FaShoppingCart size={32} />,
  },
];
