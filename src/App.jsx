import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import './App.css'


function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");

    if (savedBlogs) {
      return JSON.parse(savedBlogs);
    }

    return [
      {
        id: 1,
        title: "Getting Started with React",
        content:
          "React is a popular JavaScript library for building modern user interfaces. It uses components and state to create interactive applications.",
        category: "React",
        author: "Admin",
        date: "2026-08-20",
      },
      {
        id: 2,
        title: "JavaScript Tips for Beginners",
        content:
          "JavaScript is one of the most important programming languages for web development. Learn variables, functions, arrays and objects.",
        category: "JavaScript",
        author: "Admin",
        date: "2026-08-19",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);


  const addBlog = (newBlog) => {
    const blog = {
      ...newBlog,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };

    setBlogs((prevBlogs) => [blog, ...prevBlogs]);
  };


  const deleteBlog = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog.id !== id)
      );
    }
  };
  
  const updateBlog = (id, updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              ...updatedBlog,
            }
          : blog
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              deleteBlog={deleteBlog}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreateBlog
              addBlog={addBlog}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditBlog
              blogs={blogs}
              updateBlog={updateBlog}
            />
          }
        />

        <Route
          path="/blog/:id"
          element={
            <BlogDetails
              blogs={blogs}
              deleteBlog={deleteBlog}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;