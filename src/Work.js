import React from 'react';

function Work() {
  return (
    <section id="work">
      <h2>Work</h2>

      <div className="project">
        <h3>Program Recommendation System (PRS)</h3>
        <p><strong>Description:</strong> This project is a recommendation system that analyzes user preferences and suggests tailored programs based on various factors. The system uses machine learning algorithms and dynamic content generation.</p>
        <img src="your-image.jpg" alt="PRS" />
        <a href="https://github.com/yourusername/PRS" target="_blank" rel="noopener noreferrer">PRS GitHub Repo</a>
      </div>

      <div className="project">
        <h3>Simple Store (Rails Project)</h3>
        <p><strong>Description:</strong> A basic e-commerce application where users can browse products, add them to the cart, and make purchases. It demonstrates RESTful APIs, model-view-controller architecture, and a robust database schema.</p>
        <img src="your-image.jpg" alt="Simple Store" />
        <a href="https://github.com/yourusername/SimpleStore" target="_blank" rel="noopener noreferrer">Simple Store GitHub Repo</a>
      </div>
    </section>
  );
}

export default Work;
