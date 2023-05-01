// import logo from './logo.svg';
import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {



  const hamBurgerElement = useRef(null)
  const navMenuElement = useRef(null)
  const navLinkElement = useRef(null)
  const mainContentElement = useRef(null)

  function closeMenu() {
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");
    // mainContent.classList.remove("active");

    hamBurgerElement.current.classList.remove("active");
    navMenuElement.current.classList.remove('active')
    // navLinkElement.current.classList.toggle('active')

    mainContentElement.current.classList.remove('active')
  }

  function mobileMenu() {
    
    hamBurgerElement.current.classList.toggle("active");
    navMenuElement.current.classList.toggle('active')
    navLinkElement.current.classList.toggle('active')

    mainContentElement.current.classList.toggle('active')
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ghco68k",
        "template_rjdxr7f",
        form.current,
        "4lh34cFy-z-Pt2oO-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            <img
              src="images/Solar.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <ul className="nav-menu" ref={navMenuElement}>
            <li className="nav-item">
              <a href="#" className="nav-link" ref={navLinkElement}>
                Home
              </a>
            </li>
            <li className="nav-item" >
              <a href="#ourService" className="nav-link" ref={navLinkElement}>
                Our Service
              </a>
            </li>
            <li className="nav-item" >
              <a href="#" className="nav-link" ref={navLinkElement}>
                About
              </a>
            </li>
            <li className="nav-item" >
              <a href="#contactUS" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="hamburger" ref={hamBurgerElement} onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      <div className="mainContent" ref={mainContentElement}>
        <div className="LandingContent">
          <img src="images/Phone2.png" />
          <h1>Solar Marketing Agency</h1>
          <p>Targeted Marketing, Maximizing results.</p>
        </div>

        <section>
          <div className="row"></div>
          <h2 className="section-heading" id="ourService">
            OUR <span>SERVICE</span>
          </h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <h3>Facebook</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
                <a href="#" className="btn btn-primary getQuote">
                  <p>GET QUOTE</p>
                </a>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-sharp fa-light fa-typewriter"></i>
                  <i className="fa-solid fa-pen-fancy"></i>
                </div>
                <h3>Copywriting</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
                <a href="#" className="btn btn-primary getQuote">
                  <p>GET QUOTE</p>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-camera"></i>
                </div>
                <h3>Content Creation</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.
                </p>
                <a href="#" className="btn btn-primary getQuote">
                  <p>GET QUOTE</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="section-contact" id="contactUS">
          <div class="container">
            <h1>Contact the team!</h1>
            <p>
              Fill out the form below to get in touch with one of our team
              members. We will try to get back to you within 48 hours. If we do
              not reply within that time please feel free to use the form again.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <div class="form-group">
                <label for="firstname">First name*</label>
                <input
                  type="text"
                  name="first_name"
                  id="firstname"
                  required
                  class="form-element"
                  placeholder="John"
                />
              </div>
              <div class="form-group">
                <label for="lastname">Last name*</label>
                <input
                  type="text"
                  name="last_name"
                  id="lastname"
                  required
                  class="form-element"
                  placeholder="Doe"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  class="form-element"
                  placeholder="Pricing"
                />
              </div>

              
              <div class="form-group">
                <label for="email">Email address*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="form-element"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div class="form-group full">
                <label for="message">What are you looking for?</label>
                <textarea
                  name="message"
                  id="message"
                  class="form-element"
                  placeholder="I want a website please..."
                ></textarea>
              </div>
              <div class="submit-group">
                <input type="submit" value="SEND MESSAGE" />
              </div>
            </form>
          </div>
        </section>
      </div>

      <footer>
  <div className="footer-content">
    <h3>Solar Marketing</h3>
    <p>Solar Marketing is a place where we do marketing</p>
    <div className="socials">
      <a href="#"><i className='fa-brands fa-facebook'></i></a>
      <a href="#"><i className='fa-brands fa-instagram'></i></a>
      <a href="#"><i className='fa-brands fa-twitter'></i></a>
    </div>
  </div>

  <nav className="navbar footer-Nav">
    <ul className="nav-menu">
      <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
      <li className="nav-item">
        <a href="#" className="nav-link">Our Service</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Contact</a>
      </li>
    </ul>
  </nav>

  <p className="copyRight">© Copyrighted Solar Marketing Agency
  </p>
</footer>
    </div>
  );




}

export default App;
