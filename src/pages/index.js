import React from "react";
import Layout from "../components/layout";
import "./index.css";

const HomePage = () => (
  <Layout>
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Latest Fashion Trends</h1>
        <p>Stay ahead of the fashion curve with our expert insights and tips.</p>
        <a href="#latest-articles" className="btn">Explore Now</a>
      </div>
    </section>
    <section id="latest-articles" className="featured-section">
      <h2>Latest Articles</h2>
      <div className="cards">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Summer Fashion" />
          <h3>Summer Fashion Trends 2024</h3>
          <p>This summer, bright colors and bold patterns are in. Discover how to incorporate these trends into your wardrobe.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/12628401/pexels-photo-12628401.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Tips" />
          <h3>Top 10 Fashion Tips for a Stylish Wardrobe</h3>
          <p>Get the best fashion tips from our experts. Learn how to create stunning outfits, choose the right accessories, and more.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Accessories" />
          <h3>How to Accessorize Like a Pro</h3>
          <p>Accessorizing can make or break your outfit. Learn the art of accessorizing with our expert tips.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
