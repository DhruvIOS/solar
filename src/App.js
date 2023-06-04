// import logo from './logo.svg';
import "./App.css";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";

function App() {
  const hamBurgerElement = useRef(null);
  const navMenuElement = useRef(null);
  const navLinkElement = useRef(null);
  const mainContentElement = useRef(null);
  const footer = useRef(null);

  const fade = useRef(null);
  const fade1 = useRef(null);
  const fade2 = useRef(null);



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


  useEffect(() => {
    if (document.readyState == "complete") {

    
      fade.current.classList.toggle('visible')
      fade.current.classList.remove('hidden')

      setTimeout(() => {
        fade1.current.classList.toggle('visible')
        fade1.current.classList.remove('hidden')
      }, 3000);
    


      setTimeout(() => {
        fade2.current.classList.toggle('visible')
        fade2.current.classList.remove('hidden')
      }, 6000);



    
    }else{
      window.addEventListener("load", function() {

      fade.current.classList.toggle('visible')
      fade.current.classList.remove('hidden')


      setTimeout(() => {
        fade1.current.classList.toggle('visible')
        fade1.current.classList.remove('hidden')
      }, 3000);
      setTimeout(() => {
        fade2.current.classList.toggle('visible')
        fade2.current.classList.remove('hidden')
      }, 6000);

  
      }, false);
    }
  });
  

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
              <a
                href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172"
                className="nav-link"
                target="_blank"
              >
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
          <h1 class="hidden" ref={fade}>
            Take your business from <span className="UNKNOW">Unknown</span>{" "}
            <br />
            to <span className="UNFOR">Unforgettable</span> in 3 simple steps
          </h1>
          <p class="hidden" ref={fade1} >
            At Solar Marketing, we help businesses succeed in the digital world{" "}
            <br /> with our proven 3-step process. Our team of experts works
            closely with you <br />
            to create a tailored strategy that meets your unique needs and
            goals.{" "}
          </p>

          <a 
            class="hidden" ref={fade2}
            href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172"
            target="_blank" 
          >
            {" "}
            Speak to our team
          </a>
        </div>

        <div class="we-offer-area text-center bg-gray div" id="ourService">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="site-heading text-center">
                  <h2>
                    OUR <span>SERVICES</span>
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

      <div className="methodMobile">
        <h1>OUR METHOD</h1>

        <div class="row">
          <div class="col-sm">
            <h3>We Brand your product</h3>
            <img src="images/package.png" />
            <h2>Branding </h2>
            <span>&#8595;</span>
          </div>
        </div>
      </div>

      {/* <div class="container ourMethod">
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
      </div> */}

      <div className="container ourMethod2 ourMethod">
        <h1>OUR METHOD</h1>
        <div class="row">
          <div class="col-sm brandTitle">
            <h3>We Brand your product</h3>
          </div>
          <div class="col-sm marketingTile">
            <h3>We tell the world about it</h3>
          </div>
          <div class="col-sm salesTitle">
            <h3>We encourage them to buy it</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm brangIMG">
            <img src="images/package.png" /> <span>&#8594;</span>
          </div>
          <div class="col-sm marketingImg">
            <img src="images/annoucement.png" /> <span>&#8594;</span>
          </div>
          <div class="col-sm salesImg">
            <img src="images/sales.png" /> 
          </div>
          
        </div>

        <div class="row">
          <div class="col-sm sub1">
            <h3>Branding</h3>
            <h1> &#8595;</h1>
          </div>

          <div class="col-sm sub2">
            <h3>Marketing</h3>
            <h1> &#8595;</h1>
          </div>

          <div class="col-sm sub3">
            <h3>Sales</h3>

          </div>
        </div>


      </div>

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
            <a
              href="https://www.honeybook.com/widget/solar_marketing_255986/cf_id/646e152889bb93002ae42172"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
        <p class="copyright">All rights resevered Solar Marketing </p>
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
