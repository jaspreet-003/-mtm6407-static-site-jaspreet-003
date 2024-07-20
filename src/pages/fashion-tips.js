import React from "react";
import Layout from "../components/layout";
import "./fashion-tips.css";

const FashionTipsPage = () => (
  <Layout>
    <section className="fashion-tips-section">
      <h1>Fashion Tips</h1>
      <p>Get the best fashion tips from our experts. Learn how to create stunning outfits, choose the right accessories, and more.</p>
      <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Tips" />
      <h2>Top 10 Tips for a Stylish Wardrobe</h2>
      <article>
        <h2>1. Invest in Quality Basics</h2>
        <p>Quality basics are the foundation of a great wardrobe. Invest in pieces that you can mix and match for various outfits.</p>
        <img src="https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quality Basics" />
      </article>
      <article>
        <h2>2. Accessorize Wisely</h2>
        <p>Accessories can make or break your outfit. Learn how to choose the right accessories to complement your look.</p>
        <img src="https://images.pexels.com/photos/23947366/pexels-photo-23947366/free-photo-of-elegant-men-in-a-car.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Accessories" />
      </article>
    </section>
  </Layout>
);

export default FashionTipsPage;
