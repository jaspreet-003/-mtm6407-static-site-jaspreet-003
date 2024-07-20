import React from "react";
import Layout from "../components/layout";
import "./fashion-trends.css";

const FashionTrendsPage = () => (
  <Layout>
    <section className="fashion-trends-section">
      <h1>Fashion Trends</h1>
      <p>Stay updated with the latest fashion trends. From seasonal styles to timeless classics, we cover everything you need to know.</p>
      <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fashion Trends" />
      <h2>Summer Trends 2024</h2>
      <article>
        <h2>Bright Colors and Bold Patterns</h2>
        <p>This summer, bright colors and bold patterns are in. Discover how to incorporate these trends into your wardrobe.</p>
        <img src="https://images.pexels.com/photos/13634354/pexels-photo-13634354.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bright Colors" />
      </article>
      <article>
        <h2>Eco-Friendly Fashion</h2>
        <p>Eco-friendly fashion is on the rise. Learn how to make sustainable choices without compromising on style.</p>
        <img src="https://images.pexels.com/photos/6567283/pexels-photo-6567283.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Eco Fashion" />
      </article>
    </section>
  </Layout>
);

export default FashionTrendsPage;
