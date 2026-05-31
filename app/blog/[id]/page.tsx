"use client";

import { useState } from "react";
import { use } from "react";
import blogsData from "@/app/constants/blogs.json";
import { CursorGlow } from "@/app/components/CursorGlow";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { useMouseTracking } from "@/app/hooks/useMouseTracking";
import { useMobileMenu } from "@/app/hooks/useMobileMenu";

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const mousePos = useMouseTracking();
  const [menuOpen, setMenuOpen] = useMobileMenu();
  
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="page-root">
        <CursorGlow x={mousePos.x} y={mousePos.y} />
        <Navigation menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
        <div className="blog-post-container">
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <h1>Blog post not found</h1>
            <a href="/blog" className="blog-link" style={{ marginTop: "1rem", display: "inline-block" }}>
              ← Back to Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-root">
      <CursorGlow x={mousePos.x} y={mousePos.y} />
      <Navigation menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      <article className="blog-post-section">
        <div className="blog-post-container">
          <div className="blog-post-header">
            <a href="/blog" className="blog-back-link">← Back to Blog</a>
            <div className="blog-post-meta">
              <span className="blog-post-category">{blog.category}</span>
              <span className="blog-post-date">{blog.date}</span>
              <span className="blog-post-read-time">{blog.readTime}</span>
            </div>
            <h1 className="blog-post-title">{blog.title}</h1>
            <p className="blog-post-excerpt">{blog.excerpt}</p>
          </div>

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

          <div className="blog-post-tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="blog-post-footer">
            <a href="/blog" className="blog-link">
              ← Back to Blog
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
