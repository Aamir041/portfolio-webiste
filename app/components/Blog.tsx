"use client";

import blogsData from "@/app/constants/blogs.json";

export function Blog() {
  const blogs = blogsData;
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts on backend engineering, software architecture, and technology.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-read-time">{blog.readTime}</span>
                <a href={`/blog/${blog.id}`} className="blog-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
