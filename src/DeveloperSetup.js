import React from 'react';

function DeveloperSetup() {
  return (
    <section id="developer-setup">
      <h2>Developer Setup</h2>

      <div className="vs-code-setup">
        <h3>VSCode Set Up</h3>
        <ul>
          <li>Prettier: For code formatting.</li>
          <li>ESLint: Linting tool to ensure clean and error-free JavaScript.</li>
          <li>Bracket Pair Colorizer: Colorizes matching brackets for easier readability.</li>
          <li>Live Server: Real-time browser preview during development.</li>
        </ul>
      </div>

      <div className="terminal-setup">
        <h3>Terminal Set Up</h3>
        <ul>
          <li>Zsh with Oh-My-Zsh: Customizable terminal with enhanced autocompletion and prompts.</li>
          <li>VSCode Integrated Terminal: Preferred for quick and efficient development workflows.</li>
          <li>Git Bash: When working on Windows, for smooth Git and bash command executions.</li>
        </ul>
      </div>

      <div className="editor-font">
        <h3>Preferred Editor Font</h3>
        <p>Font: Fira Code (with programming ligatures enabled for better readability)</p>
        <p>Size: 16px</p>
      </div>
    </section>
  );
}

export default DeveloperSetup;
