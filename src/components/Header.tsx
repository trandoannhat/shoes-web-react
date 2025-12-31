import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-amber-100">
        {/*logo*/}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" className="h-12 w-auto" alt="logo shoes" />
        </Link>

        {/* text */}
        <h3 className="font-bold text-green-600 hover:text-blue-600">
          BUY 2 GET 1 DISCOUNT 20%
        </h3>
        {/*menu*/}
        <nav className="flex gap-6">
          <Link to="/" className="font-bold text-red-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/shop"
            className="font-bold text-red-600 hover:text-blue-600"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="font-bold text-red-600 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-bold text-red-600 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
