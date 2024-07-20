import React from "react";
import Layout from "../components/layout";
import "./contact.css";

const ContactPage = () => (
  <Layout>
    <section className="contact-section">
      <h1>Contact Us</h1>
      <p>Have questions? Feel free to reach out to us. We'd love to hear from you!</p>
      <form name="contact" method="POST" data-netlify="true">
        <div className="form-group">
          <label>Name: <input type="text" name="name" required /></label>
        </div>
        <div className="form-group">
          <label>Email: <input type="email" name="email" required /></label>
        </div>
        <div className="form-group">
          <label>Message: <textarea name="message" required></textarea></label>
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  </Layout>
);

export default ContactPage;
