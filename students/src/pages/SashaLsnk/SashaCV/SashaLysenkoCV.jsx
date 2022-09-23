import React from "react";
import "./styles.css";

const SashaLysenkoCV = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Open+Sans:300,400,500,700|Waiting+for+the+Sunrise|Shadows+Into+Light"
      rel="stylesheet"
      type="text/css"
    />
    <div className="wrapper clearfix">
      <div className="left">
        <div className="name-hero">
          <div className="me-img" />
          <div className="name-text">
            <h1>
              Oleksandra <em>Lysenko</em>
            </h1>
            <p>Karmanskyy Street, 6B, APT 38, Lviv, 79026</p>
            <p>olysenko25@gmail.com</p>
            <p>+380-93-9000-945</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="inner">
          <section>
            <h1>Education</h1>
            <p>
              2021-2022 <em>| Logos IT Academy | Frontend Development</em>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis lorem ante, ac pellentesque augue scelerisque
              in. Donec eget libero quis risus finibus pulvinar a in massa. Nam
              sodales at.
            </p>
            <p>
            2015 - 2021{" "}
              <em> |
                Ivan Franko National University of Lviv | Faculty of
                International Relations
              </em>
            </p>
            <p>
              Graduated with a Master's degree with honors in International Law
              and Translation.
            </p>
            <p>
              2017 - 2018{" "}
              <em> |
                University of Foggia, Italy | Faculty of Law
              </em>
            </p>
            <p>
              Participant of the Erasmus+ exchange program.
            </p>
          </section>
          <section>
            <h1>Technical Skills</h1>
            <ul className="skill-set">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Responsive design</li>
              <li>Agile/Scrum Methodology</li>
              <li>Typescript</li>
              <li>Git version control</li>
            </ul>
          </section>
          <section>
            <h1>Soft Skills</h1>
            <ul className="skill-set">
              <li>Teamworker</li>
              <li>Issues solver</li>
              <li>Client-aimed code writer</li>
              <li>Fast learner</li>
              <li>Creative person</li>
              <li>Patient and empathic</li>
            </ul>
          </section>
          <section>
            <h1>Languages</h1>
            <p>
              <em>English | C1 (Advanced) </em> | CAE certificate with the overall grade of 193
            </p>
            <p>
                <em>Italian | A2 (Pre-Intermediate) </em> 
            </p>
            <p>
                <em>Polish | B1 (Intermediate) </em> 
            </p>
            
          </section>
          <section>
            <h1>Personal Interests</h1>
            <ul className="skill-set">
              <li>Psychology</li>
              <li>Art</li>
              <li>Gardening</li>
              <li>Yoga</li>
              <li>Health &amp; Nutrition</li>
              <li>Reading</li>
              <li>Cooking</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default SashaLysenkoCV;
