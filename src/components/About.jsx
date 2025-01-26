import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "Java" },
    { name: "React.js" },
    { name: "MUI" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDb" },
    { name: "SQL" },
    { name: "C" },
    { name: "Git" },
  ];

  return (
    <div
      id="aboutme"
      style={{
        padding: '2.5rem 1.75rem',
        backgroundColor: '#2c3e50', // Dark blue-grey for a professional base
        color: '#ecf0f1', // Light grey for text contrast
        minHeight: '100vh',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          color: '#3498db', // Bright blue for the title to create a strong focal point
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '1.25rem',
          animation: 'fadeIn 1s ease-out',
        }}
      >
        About Me:
      </h1>

      <div
        style={{
          margin: '0 auto 1.25rem auto',
          lineHeight: '1.75',
          color: '#bdc3c7', // Soft grey text for better readability
          maxWidth: '66%',
          animation: 'fadeInUp 1.5s ease-out',
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          Hi, my name is Chandra Mukherjee. I'm a B.Tech 3rd year Computer Science Engineering 
          undergrad at University Of Engineering And Management, Kolkata.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          I am fluent in well-known languages like Java (Proficient), C, and JavaScript. 
          My areas of interest lie in Web Development and Problem Solving. I am also an 
          Open-Source Enthusiast.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Apart from coding, I love to write poems and play games in my free time.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2.5rem 0',
          gap: '1rem',
          animation: 'fadeInUp 1.5s ease-out',
        }}
      >
        <div
          style={{
            color: '#3498db', // Consistent blue color for emphasis on the number
            fontSize: '6rem',
            fontWeight: '700',
            animation: 'bounceIn 2s ease-out',
          }}
        >
          2.0+
        </div>
        <p
          style={{
            color: '#ecf0f1', // Light grey for the description
            fontSize: '1.5rem',
            maxWidth: '80%',
            margin: '0',
            animation: 'fadeInUp 1.5s ease-out',
          }}
        >
          Years of academic and internship experience. Specialized in building web apps, 
          software, and contributions to the Open-Source community.
        </p>
      </div>

      {/* Skills Section */}
      <div style={{ margin: '2.5rem 0' }}>
        <h2
          style={{
            color: '#3498db', // Blue heading for skills to match the theme
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.25rem',
            animation: 'fadeInUp 1.5s ease-out',
          }}
        >
          Skills:
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.25rem',
            maxWidth: '100%',
            justifyContent: 'center',
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#34495e', // Darker blue-grey for skill cards
                padding: '1.25rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                borderRadius: '0.375rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center',
                color: '#ecf0f1', // Light text for readability
                fontSize: '1.25rem',
                fontWeight: '600',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3498db'; // Hover effect: light blue
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#34495e'; // Reset to darker blue-grey
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default About;
