// import logo from './logo.svg';
import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const hamBurgerElement = useRef(null);
  const navMenuElement = useRef(null);
  const navLinkElement = useRef(null);
  const mainContentElement = useRef(null);

  function closeMenu() {
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");
    // mainContent.classList.remove("active");

    hamBurgerElement.current.classList.remove("active");
    navMenuElement.current.classList.remove("active");
    // navLinkElement.current.classList.toggle('active')

    mainContentElement.current.classList.remove("active");
  }

  function mobileMenu() {
    hamBurgerElement.current.classList.toggle("active");
    navMenuElement.current.classList.toggle("active");
    navLinkElement.current.classList.toggle("active");

    mainContentElement.current.classList.toggle("active");
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
    <div className="body">
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
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#ourService" className="nav-link" ref={navLinkElement}>
                OUR SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" ref={navLinkElement}>
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactUS" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
          <div
            className="hamburger"
            ref={hamBurgerElement}
            onClick={mobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>


      </header>

      <div className="mainContent" ref={mainContentElement}>
        {/* <div className="LandingContent">
          <img src="images/Phone2.png" />
          <h1>Solar Marketing Agency</h1>
          <p>Targeted Marketing, Maximizing results.</p>


        </div> */}

        <div class="container2">
          <img className="BG5" src="images/Bg5.jpg" alt="Snow" />

            <img className="heroIMG"src="images/solar2.png" />
          <div class="centered">

              <h1 className="SOLAR">SOLAR </h1>
              <h3 className="TagLine">TARGETED MARKETING, MAXIMIZING RESULT</h3>
              {/* <button class="button button1" >GET QUOTE</button> */}
              <a href="#contactUS"><button className="button1"> GET QUOTE</button></a>
          </div>
              <img className="phone" src="images/Phone2.png" />

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
                <h3>BRANDING & WEBSITE</h3>
                <p>
                We will work with you to create a cohesive brand identity that reflects your company's values and mission. This includes designing a logo, choosing typography and color schemes, and setting up your social media profiles. Additionally, we will create a website for your company and ensure that it's optimized for search engines.

                </p>
                <a href="#" className="btn btn-primary getQuote">
                  <p>GET QUOTE</p>
                </a>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  {/* <i className="fa-sharp fa-light fa-typewriter"></i> */}
                  <i className="fa-solid fa-pen-fancy"></i>
                </div>
                <h3>Content Strategy</h3>
                <p>
                Our team will develop a comprehensive content strategy that aligns with your brand and resonates with your target audience. This will include creating a content calendar, producing high-quality content, and optimizing it for search engines. We will also work on improving your website's SEO to increase your online visibility and drive traffic to your site.
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
                <h3>AD CAMPAIGNS</h3>
                <p>
                We will create and manage effective ad campaigns on Facebook and Google that target your desired audience and drive traffic to your website. We will regularly monitor and optimize the campaigns to ensure maximum return on investment.
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

      <section class="footer">
        <div class="social">
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
        <ul class="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Our Service</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p class="copyright">Solar Marketing @ 2022</p>
      </section>
    </div>
  );
}

export default App;
