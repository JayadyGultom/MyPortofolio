import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Memahami HTTP: Protokol yang Menghubungkan Dunia Web",
      excerpt: "HTTP adalah tulang punggung komunikasi web yang kita gunakan setiap hari. Mari menyelami bagaimana protokol ini bekerja, evolusinya dari HTTP/1.1 hingga HTTP/3, dan mengapa pemahaman ini penting...",
      date: "22 Desember 2024",
      category: "Technology",
      readTime: "20 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Menyelami Cara Kerja Internet: Perjalanan Data dari Layar ke Seluruh Dunia",
      excerpt: "Di balik satu klik yang kita lakukan setiap hari—entah itu membuka YouTube, mengakses Google, atau membaca berita online—ada proses teknis yang sangat kompleks, namun luar biasa cerdas...",
      date: "20 Desember 2024",
      category: "Technology",
      readTime: "25 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Algoritma Sorting: Dari Bubble Sort hingga Quick Sort",
      excerpt: "Algoritma sorting adalah fondasi dalam ilmu komputer. Mari kita eksplorasi berbagai teknik sorting, mulai dari yang sederhana hingga yang efisien, dan kapan menggunakan masing-masing...",
      date: "3 Januari 2025",
      category: "Programming",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ["All", "Technology", "Programming"];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Blog & Articles</h2>
          <p>Berbagi pengetahuan dan pengalaman dalam dunia teknologi</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="blog-card"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Baca Selengkapnya
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Blog;
