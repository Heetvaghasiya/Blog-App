import { useNavigate, useParams, Link } from "react-router-dom";
import BlogForm from "../Components/BlogForm";

function EditBlog({ blogs, updateBlog }) {
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

  const handleUpdate = (updatedData) => {
    updateBlog(blog.id, updatedData);
    navigate(`/blog/${blog.id}`);
  };

  return (
    <main className="max-w-3xl mx-auto px-5 py-12">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Edit Blog
        </h1>

        <p className="text-slate-500 mt-2">
          Update your blog post
        </p>
      </div>

      <BlogForm
        initialData={blog}
        onSubmit={handleUpdate}
        buttonText="Update Blog"
      />

    </main>
  );
}

export default EditBlog;