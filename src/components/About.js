import React from 'react';
import shahnawazImg from '../Shahnawaz.png';
function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 order-md-2">
          <img src={shahnawazImg} alt="Shahnawaz" className="img-fluid rounded-circle border border-black" />
        </div>
        <div className="col-md-6 order-md-1">
          <h1>About Me</h1>
          <hr />
          <p>My name is Shahnawaz and I am a student studying in Greenfields Public School in 10th class. Along with my studies, I am also working towards my passion for tech and tech-related stuff. Currently, I am working on UI/UX, frontend development, React JS, and more. At just 15 years old, I have a lot of time to learn and grow in this field, and I'm excited to see where it takes me!</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h1>About TextUtils</h1>
          <hr />
          <p>TextUtils is a simple web app that I created to help people with their everyday text editing needs. With features like converting text to uppercase or lowercase, removing extra spaces, and copying text to the clipboard, TextUtils is a helpful tool for anyone who works with text on a regular basis. I created this app using React JS and Bootstrap, and I'm always looking for ways to improve it and add new features.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
