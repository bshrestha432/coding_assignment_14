import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import social icons
import './App.css';

// Styled components with the new theme
const Section = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #1d1d1d; /* Black background for sections */
  border-radius: 8px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #f1e6d3; /* Beige text for headings */
`;

const Text = styled.p`
  font-size: 1rem;
  color: #f1e6d3; /* Beige text for paragraphs */
  line-height: 1.6;
`;

const ProjectContainer = styled.div`
  margin-top: 20px;
  background-color: #1d1d1d; /* White background for project containers */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin: 10px 0;
  color: #f1e6d3; /* Beige text for list items */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const IconLink = styled.a`
  color: #ffffff; /* White color for icons */
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    color:rgb(211, 241, 221); /* Beige color on hover */
  }
`;

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1d1d1d', color: '#f1e6d3', minHeight: '100vh', padding: '20px' }}>
      {/* Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#f1e6d3' }}>Bishal Shrestha</h1>
        <p style={{ color: '#f1e6d3', fontSize: '1.5rem' }}>Full Stack Web Developer</p>
        <p style={{ color: '#f1e6d3', fontSize: '1rem' }}>Passionate about building interactive and user-friendly websites.</p>
      </header>

      {/* Social Media Icons */}
      <SocialIcons>
        <IconLink href="https://www.instagram.com/bishal.shrestha___/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.facebook.com/Python0P" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://github.com/bshrestha432" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/bishal-shrestha-616271306" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:sthapython999@gmail.com">
          <FaEnvelope />
        </IconLink>
      </SocialIcons>

      {/* Work Section */}
      <Section>
        <Heading>Projects</Heading>

        <ProjectContainer>
          <h3>Crypto tracking website</h3>
          <p>This project is a recommendation system that analyzes user preferences and suggests tailored programs based on various factors. The system uses machine learning algorithms and dynamic content generation.</p>
          <img src="your-image.jpg" alt="PRS" style={{ width: '100%', borderRadius: '8px' }} />
          <br />
          <a href="https://github.com/bshrestha432/crypto_tracker.git" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>GitHub Repo</a>
        </ProjectContainer>

        <ProjectContainer>
          <h3>Horror Story Project</h3>
          <p><strong>Description:</strong> A basic e-commerce application where users can browse products, add them to the cart, and make purchases. It demonstrates RESTful APIs, model-view-controller architecture, and a robust database schema.</p>
          <img src="your-image.jpg" alt="Simple Store" style={{ width: '100%', borderRadius: '8px' }} />
          <br />
          <a href="https://github.com/bshrestha432/Final-Project.git" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>GitHub Repo</a>
        </ProjectContainer>
      </Section>

      {/* Tech List Section */}
      <Section>
        <Heading>Tech List</Heading>

        <div>
          <h3>Languages/Frameworks</h3>
          <List>
            <ListItem>JavaScript: For client-side and server-side development.</ListItem>
            <ListItem>React: Used to create dynamic UIs and single-page applications.</ListItem>
            <ListItem>Ruby on Rails: Full-stack framework for building backend and database-driven applications.</ListItem>
            <ListItem>Node.js: JavaScript runtime for building server-side applications.</ListItem>
            <ListItem>Python: General-purpose programming for back-end services and machine learning.</ListItem>
          </List>
        </div>

        <div>
          <h3>Tools</h3>
          <List>
            <ListItem>Git: Version control system for managing code changes.</ListItem>
            <ListItem>Docker: Containerization tool for consistent development and deployment environments.</ListItem>
            <ListItem>Webpack: Module bundler for JavaScript, CSS, and assets.</ListItem>
            <ListItem>AWS: Cloud platform used for deploying applications in scalable environments.</ListItem>
            <ListItem>Nginx: Web server and reverse proxy for optimized HTTP handling.</ListItem>
          </List>
        </div>
      </Section>

      {/* Developer Setup Section */}
      <Section>
        <Heading>Developer Setup</Heading>

        <div>
          <h3>VSCode Set Up</h3>
          <List>
            <ListItem>Prettier: For code formatting.</ListItem>
            <ListItem>ESLint: Linting tool to ensure clean and error-free JavaScript.</ListItem>
            <ListItem>Bracket Pair Colorizer: Colorizes matching brackets for easier readability.</ListItem>
            <ListItem>Live Server: Real-time browser preview during development.</ListItem>
          </List>
        </div>

        <div>
          <h3>Terminal Set Up</h3>
          <List>
            <ListItem>Zsh with Oh-My-Zsh: Customizable terminal with enhanced autocompletion and prompts.</ListItem>
            <ListItem>VSCode Integrated Terminal: Preferred for quick and efficient development workflows.</ListItem>
            <ListItem>Git Bash: When working on Windows, for smooth Git and bash command executions.</ListItem>
          </List>
        </div>

        <div>
          <h3>Preferred Editor Font</h3>
          <Text>Font: Fira Code (with programming ligatures enabled for better readability)</Text>
          <Text>Size: 16px</Text>
        </div>
      </Section>
    </div>
  );
}

export default App;
