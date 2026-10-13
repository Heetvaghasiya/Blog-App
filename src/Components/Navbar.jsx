import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">


        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          ✍️ MyBlog
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            + Create Blog
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;