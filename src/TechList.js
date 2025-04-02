import React from 'react';

function TechList() {
  return (
    <section id="tech-list">
      <h2>Tech List</h2>

      <div className="skills">
        <h3>Languages/Frameworks</h3>
        <ul>
          <li>JavaScript: For client-side and server-side development.</li>
          <li>React: Used to create dynamic UIs and single-page applications.</li>
          <li>Ruby on Rails: Full-stack framework for building backend and database-driven applications.</li>
          <li>Node.js: JavaScript runtime for building server-side applications.</li>
          <li>Python: General-purpose programming for back-end services and machine learning.</li>
        </ul>
      </div>

      <div className="tools">
        <h3>Tools</h3>
        <ul>
          <li>Git: Version control system for managing code changes.</li>
          <li>Docker: Containerization tool for consistent development and deployment environments.</li>
          <li>Webpack: Module bundler for JavaScript, CSS, and assets.</li>
          <li>AWS: Cloud platform used for deploying applications in scalable environments.</li>
          <li>Nginx: Web server and reverse proxy for optimized HTTP handling.</li>
        </ul>
      </div>
    </section>
  );
}

export default TechList;
