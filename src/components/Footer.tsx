import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-amber-400 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <Link to="/">
            <img src="/logo.jpg" className="h-12 w-auto" alt="logo shoes" />
          </Link>
          <p className="text-gray-600 mt-2 font-medium">
            Premium shoes for your daily style.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-red-600">Links</h4>
          <ul className="space-y-1">
            <li>
              {" "}
              <Link
                to="/"
                className="font-bold text-white-600 hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <li>
                {" "}
                <Link
                  to="/shop"
                  className="font-bold text-white-600 hover:text-blue-600"
                >
                  Shop
                </Link>
              </li>
              <Link
                to="/about"
                className="font-bold text-white-600 hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/contact"
                className="font-bold text-white-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-red-600">Contact</h4>
          <p className="font-bold mb-2 text-gray-600">
            Email:shopshoes@gmail.com
          </p>
          <p className="font-bold mb-2 text-gray-600">Phone:+84 456 7890</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4 border-gray-700">
        © {new Date().getFullYear()} Shop Shoes. All rights reserved by nhatdev
      </div>
    </footer>
  );
}

export default Footer;
