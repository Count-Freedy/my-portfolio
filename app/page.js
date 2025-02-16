import Image from "next/image";
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
      <>
          {/* Navbar */}
          <Navbar />

          {/* Welcome Section */}
          <section
              id="home"
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "4rem 2rem",
                  textAlign: "center",
              }}
          >
              <h1
                  style={{
                      fontSize: "2.5rem",
                      margin: "0 0 1rem",
                      color: "#333",
                  }}
              >
                  Welcome to My Portfolio !
              </h1>
              <h4
                  style={{
                      fontSize: "2.5rem",
                      margin: "0 0 1rem",
                      color: "#333",
                  }}
              >
                  Hi, I am Kunal Kumar
              </h4>
              <p
                  style={{
                      fontSize: "1.2rem",
                      margin: "0 0 2rem",
                      color: "#666",
                  }}
              > 
                  A passionate software developer and data enthusiast with expertise in Web Development , Data Science and Analytics. I specialize in building modern web applications, leveraging technologies like Next.js, React, and Python. With a keen interest in AI/ML and hands-on experience in project management, I strive to create impactful and innovative solutions.
                  Explore my projects, skills, and certifications to learn more about my journey in tech and my commitment to continuous learning.
              </p>
              <a
                  href="#projects"
                  style={{
                      display: "inline-block",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#333",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "0.25rem",
                  }}
              >
                  View My Projects
              </a>

              {/* 'Download Resume' Button */}
              <a
                  href="/KUNAL KUMAR RESUME.pdf"  // Link to resume file in public folder
                  download="Resume.pdf"  // Specifies download behavior and filename
                  style={{
                      display: "inline-block",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#0070f3",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "0.25rem",
                  }}
              >
                  Download Resume
              </a>

          </section>

          {/* Projects Section */}
          <section id="projects" style={{ padding: "2rem", backgroundColor: "#fff" }}>
              <h2 style={{ fontSize: "2rem", margin: "0 0 1rem", color: "#333" }}>
                  Projects 
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <div
                      style={{
                          flex: "1 1 300px",
                          padding: "1rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "0.5rem",
                      }}
                  >
                      <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
                         Agricultural Yield Prediction
                      </h3>
                      <p style={{ color: "#666" }}>
                          A data analytics project predicting crop yield based on weather data, soil quality, pest outbreaks, historical crop yield data and remote sensing imagery to develop more accurate predictive models using machine learning models and stastical analytics.
                      </p>
                      <a
                          href="https://drive.google.com/drive/folders/1nx1gcCwtfOxkBgcDXv4FCXtc0Im6s2hG"
                          style={{ color: "#0070f3", textDecoration: "underline" }}
                      >
                          Learn More
                      </a>
                  </div>
                  <div
                      style={{
                          flex: "1 1 300px",
                          padding: "1rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "0.5rem",
                      }}
                  >
                      <h3 style={{ fontSize: "1.5rem", color: "#333" }}>
                          Heart Disease Prediction Model
                      </h3>
                      <p style={{ color: "#666" }}>
                          Developed a machine learning model to predict the likelihood of heart disease using patient health data. The model utilizes algorithms such as Logistic Regression and Random Forest, achieving high accuracy through effective data preprocessing and feature engineering. Key features include blood pressure, cholesterol levels, and age. This project highlights skills in data analysis, model evaluation, and Python programming, contributing to healthcare decision-making by providing early detection insights.
                      </p>
                      <a
                          href="https://drive.google.com/drive/folders/1oHdLhJn4gmJYT7QmlR98ZVfj6p0ix7MM"
                          style={{ color: "#0070f3", textDecoration: "underline" }}
                      >
                          Learn More
                      </a>
                  </div>
                  {/* Add more project cards as needed */}
              </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
              <h2 style={{ fontSize: '2rem', margin: '0 0 1rem', color: '#333' }}>Certifications</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                      <img src="data fundamentals certificate.jpg" alt="Certification 1" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Data Fundamentals</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <img src="project management certificate.jpg" alt="Certification 2" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Project Management Fundamentals</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <img src="ethical hacking certificate.jpg" alt="Certification 2" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Ethical Hacking</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <img src="data analytics geeksforgeeks certificate.jpg" alt="Certification 2" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Roadmap to Data Analytics</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <img src="figma and canva fusion workshop certificate.jpg" alt="Certification 2" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Figma & Canva Fusion Workshop</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <img src="google analytics certificate.jpg" alt="Certification 2" style={{ width: '300px', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                      <p style={{ marginTop: '0.5rem', color: '#666' }}>Google Analytics</p>
                  </div>
                  {/* Add more certifications as needed */}
              </div>
          </section>

          {/* Skills Section */}
          <section id="skills" style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
              <h2 style={{ fontSize: '2rem', margin: '0 0 1rem', color: '#333' }}>skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

              <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>Java
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>JavaScript
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>Python
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>C
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>C++
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>HTML
                  </a>

                  <a target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>CSS
                  </a>

              </div>
          </section>
                  {/* Add other skills here */}
        
          {/* Contact Section */}
          <section id="contact" style={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
              <h2 style={{ fontSize: "2rem", margin: "0 0 1rem", color: "#333" }}>
                  Contact
              </h2>
              <p style={{ color: "#666", marginBottom: '1rem' }}>
                  Feel free to reach out to me via the following channels:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                  <a href="mailto:kunal.kumar007.12th@gmail.com" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#0070f3',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>Mail
                  </a>

                  <a href="https://www.linkedin.com/in/kunal-kumar7127" target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#0077b5',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>LinkedIn
                  </a>

                  <a href="https://github.com/Count-Freedy" target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>GitHub
                  </a>

                  <a href="https://www.fixnhour.com/freelancers/Kunal@12" target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>fixnhour
                  </a>

                  <a href="https://www.hackerrank.com/profile/kunal_kumar007_1" target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#333',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      textAlign: 'center'
                  }}>HackerRank
                  </a>

              </div>
          </section>
      </>
  );
}
