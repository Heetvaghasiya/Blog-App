import { Link } from "react-router-dom";

function BlogCard({ blog, deleteBlog }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-slate-200">

      <div className="p-6">

        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          {blog.category}
        </span>

        <h2 className="text-xl font-bold text-slate-800 mb-3">
          {blog.title}
        </h2>

        <p className="text-slate-600 leading-6 mb-5">
          {blog.content.length > 120
            ? blog.content.substring(0, 120) + "..."
            : blog.content}
        </p>

        <div className="flex justify-between text-sm text-slate-500 mb-5">
          <span>👤 {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>

        <div className="flex flex-wrap gap-2">

          <Link
            to={`/blog/${blog.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Read More
          </Link>

          <Link
            to={`/edit/${blog.id}`}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Edit
          </Link>

          <button
            onClick={() => deleteBlog(blog.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default BlogCard;