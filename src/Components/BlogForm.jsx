import { useState } from "react";

function BlogForm({ initialData, onSubmit, buttonText }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [category, setCategory] = useState(
    initialData?.category || "Technology"
  );
  const [author, setAuthor] = useState(initialData?.author || "");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      content.trim() === "" ||
      author.trim() === ""
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");

    onSubmit({
      title,
      content,
      category,
      author,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200"
    >

      {error && (
        <div className="mb-5 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Blog Title *
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Author *
        </label>

        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Technology">Technology</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Programming">Programming</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Blog Content *
        </label>

        <textarea
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default BlogForm;