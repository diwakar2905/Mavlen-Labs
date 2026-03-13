"use client";

import { useState } from "react";
import Image from "next/image";
import "./Blog.css";

const SAMPLE_BLOGS = [
    {
        id: 1,
        title: "How We Built a SaaS Product from Zero to Launch",
        url: "https://medium.com/@mavlenlabs/how-we-built-a-saas-product-from-zero-to-launch-and-what-actually-mattered-dbfea3022c9c",
        source: "medium",
        category: "Product Development",
        date: "Jan 11, 2026",
        image: "/blog/b1.jpg"
    }
];

const BlogCard = ({ blog, featured }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <article
            className={`blog-card ${featured ? "featured" : ""}`}
            onClick={() => window.open(blog.url, "_blank")}
        >
            <div className={`blog-image-container ${imageLoaded ? 'loaded' : ''}`}>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="blog-image"
                    style={{ objectFit: 'cover' }}
                    onLoad={() => setImageLoaded(true)}
                    priority={featured}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
            </div>

            <div className="blog-badges">
                <span className="blog-date-badge">{blog.date}</span>
                <span className="blog-category-badge">• {blog.category}</span>
            </div>

            <div className="blog-title-box">
                <h3>{blog.title}</h3>
            </div>

            <div className="blog-arrow-btn">
                <span>↗</span>
            </div>
        </article>
    );
};

const BlogSection = ({ blogs = SAMPLE_BLOGS }) => {
    const count = blogs.length;

    return (
        <section id="blog" className="blog-section">
            <div className="blog-header">
                <h2 className="blog-title">
                    Best of the week
                </h2>
            </div>

            <div
                className={`blog-grid ${count === 1 ? "one" : count === 2 ? "two" : "three"
                    }`}
            >
                {count >= 3 ? (
                    <>
                        <BlogCard blog={blogs[0]} featured />

                        <div className="small">
                            {blogs.slice(1, 3).map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </>
                ) : (
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} featured={count === 1} />
                    ))
                )}
            </div>
        </section>
    );
};

export default BlogSection;
