import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Suneetha </h1>
        <h2>Electronics & Instrumentation Engineering Student</h2>
        <p>
          Passionate about Full Stack Development and building modern web
          applications using React, Node.js, Express, JavaScript, and MongoDB.
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
          Engineering at Kongu Engineering College .I enjoy creating responsive web applications and continuously
          improving my problem-solving skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="skill-container">
          <div className="skill">C</div>
          <div className="skill">Java</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">factorio</div>
          <div className="skill">Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>
          <p>
            Built using React, Node.js, Express, and MongoDB.
            Allows teachers to mark attendance and view reports.
          </p>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            CRUD application for managing student records using
            MERN Stack technologies.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            Responsive portfolio showcasing skills, projects,
            and contact information.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Kongu Engineering College</h3>
          <p>B.E Electronics and Instrumentation Engineering</p>
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
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
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