import React from "react";
import Layout from "../components/layout";
import "./about.css";

const AboutPage = () => (
  <Layout>
    <section className="about-section">
      <h1>About Us</h1>
      <p>Welcome to My Fashion Website, your number one source for all things fashion. We're dedicated to providing you the very best of fashion trends, with an emphasis on style, quality, and sustainability.</p>
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fashion Image" />
      <h2>Our Mission</h2>
      <p>Our mission is to empower individuals to express their unique style through fashion. We believe that fashion is a powerful tool for self-expression and confidence. Whether you're looking for the latest trends or timeless classics, we have something for everyone.</p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality:</strong> We prioritize high-quality materials and craftsmanship in every piece we feature.</li>
        <li><strong>Sustainability:</strong> We are committed to promoting eco-friendly and sustainable fashion choices.</li>
        <li><strong>Inclusivity:</strong> We believe fashion should be accessible to everyone, regardless of size, shape, or background.</li>
      </ul>
    </section>
  </Layout>
);

export default AboutPage;
