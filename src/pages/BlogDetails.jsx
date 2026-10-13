import { Link, useNavigate, useParams } from "react-router-dom";

function BlogDetails({ blogs, deleteBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(
    (item) => item.id.toString() === id
  );

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-20 text-center">

        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Blog Not Found
        </h1>

        <Link
          to="/"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg"
        >
          Go Home
        </Link>

      </div>
    );
  }

  const handleDelete = () => {
    deleteBlog(blog.id);
    navigate("/");
  };

  return (
    <main className="max-w-4xl mx-auto px-5 py-12">

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 md:p-12">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-5">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-5 mt-6 text-blue-100">
            <span>👤 {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>

        </div>

        {/* Content */}
        <div className="p-8 md:p-12">

          <p className="text-lg leading-8 text-slate-700 whitespace-pre-line">
            {blog.content}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-10 pt-6 border-t">

            <Link
              to="/"
              className="px-5 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition"
            >
              ← Back
            </Link>

            <Link
              to={`/edit/${blog.id}`}
              className="px-5 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              ✏️ Edit
            </Link>

            <button
              onClick={handleDelete}
              className="px-5 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              🗑️ Delete
            </button>

          </div>

        </div>
      </article>

    </main>
  );
}

export default BlogDetails;