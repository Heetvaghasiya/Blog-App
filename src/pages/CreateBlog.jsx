import { useNavigate } from "react-router-dom";
import BlogForm from "../Components/BlogForm";

function CreateBlog({ addBlog }) {
  const navigate = useNavigate();

  const handleCreate = (blogData) => {
    addBlog(blogData);
    navigate("/");
  };

  return (
    <main className="max-w-3xl mx-auto px-5 py-12">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Create New Blog
        </h1>

        <p className="text-slate-500 mt-2">
          Share your thoughts with the world
        </p>
      </div>

      <BlogForm
        onSubmit={handleCreate}
        buttonText="Publish Blog"
      />

    </main>
  );
}

export default CreateBlog;