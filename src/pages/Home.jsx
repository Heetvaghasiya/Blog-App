import { useState } from "react";
import BlogCard from "../Components/BlogCard";

function Home({ blogs, deleteBlog }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>

      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Welcome to MyBlog 
          </h1>

          <p className="">
            Discover amazing stories, share your ideas and learn something
            new every day.
          </p>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="bg-white p-5 rounded-2xl shadow-md mb-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="md:col-span-2">
              <input
                type="text"
                placeholder=" Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

          </div>
        </div>


        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold text-slate-600">
            Latest Blogs
          </h2>

          <span className="text-slate-500">
            {filteredBlogs.length} Blogs
          </span>

        </div>


        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                deleteBlog={deleteBlog}
              />
            ))}

          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl p-12 shadow-md">
            <div className="text-5xl mb-4">📭</div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              No Blogs Found
            </h3>

            <p className="text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}

export default Home;