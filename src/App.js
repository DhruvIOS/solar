// import logo from './logo.svg';
import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";

function App() {
  const hamBurgerElement = useRef(null);
  const navMenuElement = useRef(null);
  const navLinkElement = useRef(null);
  const mainContentElement = useRef(null);
  const footer = useRef(null);

  function closeMenu() {
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");
    // mainContent.classList.remove("active");

    hamBurgerElement.current.classList.remove("active");
    navMenuElement.current.classList.remove("active");
    // navLinkElement.current.classList.toggle('active')

    mainContentElement.current.classList.remove("active");
    footer.current.classList.remove("active");
  }

  function mobileMenu() {
    hamBurgerElement.current.classList.toggle("active");
    navMenuElement.current.classList.toggle("active");
    navLinkElement.current.classList.toggle("active");

    mainContentElement.current.classList.toggle("active");
    footer.current.classList.toggle("active");
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
              src="images/Solar2.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <p>SOLAR MARKETING</p>
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
              <a href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172" className="nav-link" target="_blank" >
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
        <div className="heading">
          {/* <img src="images/Solar2.png" />
          <h3>SOLAR MARKETING</h3> */}
          <h1>
            Take your business from <span className="UNKNOW">Unknown</span>{" "}
            <br />
            to <span className="UNFOR">Unforgettable</span> in 3 simple steps
          </h1>
          <p>
            At Solar Marketing, we help businesses succeed in the digital world{" "}
            <br /> with our proven 3-step process. Our team of experts works
            closely with you <br />
            to create a tailored strategy that meets your unique needs and
            goals.{" "}
          </p>

          <a href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172" target="_blank"> Speak to our team</a>
        </div>

        <div class="we-offer-area text-center bg-gray div" id="ourService">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="site-heading text-center">
                  <h2>
                    What we <span>Offer</span>
                  </h2>
                  <h4>Lorem Ipsum is simply dummy text</h4>
                </div>
              </div>
            </div>
            <div class="row our-offer-items less-carousel">
              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fa-brands fa-facebook-f"></i>
                  <h4>BRANDING & WEBSITE</h4>
                  <p>
                    We will work with you to create a cohesive brand identity
                    that reflects your company's values and mission. This
                    includes designing a logo, choosing typography and color
                    schemes, and setting up your social media profiles.
                    Additionally, we will create a website for your company and
                    ensure that it's optimized for search engines.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fas fa-pen-fancy"></i>
                  <h4>Content Strategy</h4>
                  <p>
                    Our team will develop a comprehensive content strategy that
                    aligns with your brand and resonates with your target
                    audience. This will include creating a content calendar,
                    producing high-quality content, and optimizing it for search
                    engines. We will also work on improving your website's SEO
                    to increase your online visibility and drive traffic to your
                    site.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 equal-height">
                <div class="item">
                  <i class="fa-solid fa-camera"></i>
                  <h4>AD CAMPAIGNS</h4>
                  <p>
                    We will create and manage effective ad campaigns on Facebook
                    and Google that target your desired audience and drive
                    traffic to your website. We will regularly monitor and
                    optimize the campaigns to ensure maximum return on
                    investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container ourMethod">
        <h1>OUR METHOD </h1>
        <div class="row">
          <div class="col-sm">
            <h3>We Brand your product</h3>
          </div>
          <div class="col-sm">
            <h3>We tell the world about it</h3>
          </div>
          <div class="col-sm">
            <h3>We encourage them to buy it</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            {" "}
            <img src="images/package.png" /> <span>&#8594;</span>{" "}
          </div>
          <div class="col-sm">
            {" "}
            <img src="images/annoucement.png" /> <span>&#8594;</span>{" "}
          </div>
          <div class="col-sm">
            {" "}
            <img src="images/sales.png" />{" "}
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <h2 className="sub">Branding</h2>
          </div>
          <div class="col-sm">
            <h2 className="sub">Marketing</h2>
          </div>
          <div class="col-sm">
            <h2 className="sub">Sales</h2>
          </div>
        </div>
      </div>
      {/* <section class="section-contact" id="contactUS">
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
      </section> */}
 

      <section class="footer" ref={footer}>
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
            <a href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172" target="_blank">Contact</a>
          </li>
        </ul>
        <p class="copyright">All rights resevered Solar Marketing  </p>
      </section>

      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}

export default App;
