import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Suneetha Muthukumar</h1>
        <h2>Electronics & Instrumentation Engineering Student</h2>

        <p>
          Passionate about Full Stack Development and building modern web
          applications using React, Node.js, Express.js, MongoDB, and JavaScript.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am currently pursuing my B.E. in Electronics and Instrumentation
          Engineering at Kongu Engineering College. I am passionate about web
          development and enjoy building responsive applications using the MERN
          stack. I continuously improve my problem-solving and programming skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="skill-container">
          <div className="skill">C</div>
          <div className="skill">Java</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB Atlas</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Git</div>
          <div className="skill">GitHub</div>
          <div className="skill">REST API</div>
          <div className="skill">Postman</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>

          <p>
            Developed a full-stack attendance management system using React,
            Node.js, Express.js, and MongoDB Atlas. Teachers can mark daily
            attendance and view attendance records stored in the database.
          </p>

          <a
            href="YOUR_LIVE_PROJECT_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 Live Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>

          <p>
            Built a CRUD application for managing student information using the
            MERN stack. Users can add, update, delete, and view student details.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed a responsive personal portfolio website to
            showcase skills, education, projects, and contact information.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Kongu Engineering College</h3>

          <p>B.E. Electronics and Instrumentation Engineering</p>

          <p>CGPA: 8.00</p>

          <p>2024 - 2028</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Me</h2>

        <p>Email: suneethamuthukumar@gmail.com</p>

        <p>Location: Dharmapuri, Tamil Nadu</p>

        <div className="social-links">
          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="#">Resume</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Suneetha Muthukumar. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;