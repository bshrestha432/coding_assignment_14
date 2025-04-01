import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bishal Shrestha's Portfolio</h1>

      <section>
        <h2>Basic Information</h2>
        <p>Name: Bishal Shrestha</p>
        <p>Email: bishal@example.com</p>
        <p>Brief description about yourself...</p>
      </section>

      <section>
        <h2>Work</h2>
        <div>
          <h3>Title: Web Development Projects</h3>
          <p>Description: Projects showcasing my skills in web development</p>
          <img src="work_image.jpg" alt="Project Screenshot" />
          <a href="project_link">View Project</a>
        </div>
      </section>

      <section>
        <h2>Tech List</h2>
        <ul>
          <li>Languages/Frameworks: React, Node.js, JavaScript</li>
          <li>Tools: Git, Docker, VSCode</li>
          <li>Resources: React Docs, MDN</li>
        </ul>
      </section>

      <section>
        <h2>Developer Setup</h2>
        <p>VSCode Setup: Steps to set up VSCode...</p>
        <p>Terminal Setup: Steps to configure the terminal...</p>
        <p>Preferred Editor Font: Consolas</p>
      </section>
    </div>
  );
}

export default App;
