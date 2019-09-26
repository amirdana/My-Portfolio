import React from "react";
import "./style.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <div className="contact-container ">
          <div className="pop-win">
            <div onClick={this.navpopback} className="close-pop"></div>
            <div className="">
              <form
                className="contact-form"
                name="contactme"
                method="get"
                data-netlify="true"
              >
                <h1>Contact Form</h1>
                <input name="name" id="name" placeholder="Name" type="text" />
                <input
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  name="number"
                  id="number"
                  placeholder="number"
                  type="number"
                />
                <textarea
                  placeholder="message"
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="2"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div id="preload-dlt">
          <button id="preload-btn" onClick={this.esc} className="Pbtn">
            Take a Look
          </button>
          <div id="loaded" className="mt-3 tracking-in-expand">
            Loading
          </div>
          <p className="preload-upg">
            Develope and Desinged By Amirhossein Lavasani &copy; 2019{" "}
          </p>
          <div className="compatible d-flex flex-column">
            <span>
              <strong>V8 </strong>Engine Optimized
            </span>
          </div>
        </div>
        <header>
          <div className="navigation">
            <div
              onClick={() => {
                this.scrollyy(1);
              }}
              className="s1  "
            >
              Home
            </div>

            <div
              onClick={() => {
                this.scrollyy(2);
              }}
              className="s2"
            >
              Skills
            </div>

            <div
              onClick={() => {
                this.scrollyy(3);
              }}
              className="s3"
            >
              Projects
            </div>

            <div
              onClick={() => {
                this.scrollyy(4);
              }}
              className="s4 d-none" ///////////////////
            >
              Resume
            </div>
          </div>

          <div className="c-navbar ">
            <div className="c-container">
              <div className="c-brand">Amir Dana</div>

              <ul className="c-nav-ul">
                <li
                  onClick={() => {
                    this.scrollyy(1);
                  }}
                >
                  Home
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/amirdana"
                  >
                    Github
                  </a>
                </li>
                <li onClick={this.popwin}>Contact</li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://jobinja.ir/user/RQ-2433343"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-left  " id="head-bg">
            <div className="row main-row  mx-2">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div id="headtxt" className="fit-txt ">
                  <div id="head-h2" className="glitch" data-text="About me">
                    {"{ About me"}
                  </div>
                  <p className="preload-upg pl-2">
                    {" "}
                    About three years ago after forcing myself to love what i do
                    , i started to do what i truly passionate about, that's when
                    my journey for being a programmer started, "story short",
                    now im a Front-End Developer and im loving it since day one.
                    <br />
                    <br />
                    <strong id="head-ps"> </strong>
                  </p>
                  <a className="text-light " href="https://github.com/amirdana">
                    <div className="gitinf ">
                      <div className="github"></div>
                      <div>github</div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="headmid"
                className="col-md-6 col-sm-12 d-flex justify-content-center"
              >
                <div className="head-image" />
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="sec1-bg  ">
            <div className="ct5">
              <div className="row secrow">
                <div className=" col-md-4 col-sm-6   p-0  d-flex justify-content-center align-items-center">
                  <div id="r1" className="rez-1  text-center ">
                    <div className="android"></div>
                    <div className="ct2 ">
                      <p className="pt-5">Familar with</p>
                      <p>B4 Android</p>
                      <p className="rellax">Hybrid OOP</p>
                      <p className="">Hardware engaged programing</p>
                      <p className="">Couple of published app</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 p-0 pl-1 d-flex justify-content-center align-items-center">
                  <div id="r1" className="rez-2 m-2 text-center ">
                    <div className="web"></div>
                    <div className="ct2 ">
                      <p className="pt-5">HTML5 CSS3 JS-Es6+ </p>
                      <p className="">React js JSX</p>
                      <p className="">Sass Bootstrap 4.3</p>
                      <p className="">git Npm command line</p>
                      <p className="">Web API's</p>
                      <p className="">UI UX</p>
                      <p className="">SEO</p>
                    </div>
                  </div>
                </div>
                <div className=" col-md-4 col-sm-6 p-0 d-flex justify-content-center align-items-center">
                  <div id="r3" className="rez-3 m-2 text-center">
                    <div className="windows"></div>
                    <div className="ct2 ">
                      <p className="pt-5">Familar with </p>
                      <p className="">C C++ C# </p>
                      <p className="">phyton</p>
                      <p className="">Visual studio</p>
                      <p className="">OOP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="sec2-bg d-flex flex-column align-items-center justify-content-center">
            <div
              id="head-h2"
              className="glitch text-dark text-center text-dark txt-shadow"
              data-text="Projects"
            >
              Projects
            </div>
            <span className="span-line" />
            <div className="ct5">
              <div className="row  d-flex justify-content-center">
                <div className="col-md-4 col-sm-6  sec2-pj">
                  <div
                    onClick={() => this.showproj(1)}
                    className=" sec2-pjb  flex-fill text-center"
                  >
                    <div className="screen-shot1" />
                    <h4 className="mt-3">Weather Status</h4>
                    <p className="mt-1">Darksky API</p>
                    <p className="mt-1">Vanilla Js</p>
                    <p className="mt-1">Sass</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj ">
                  <div
                    onClick={() => this.showproj(2)}
                    className=" sec2-pjb  flex-fill text-center"
                  >
                    <div className="screen-shot5" />
                    <h4 className="mt-3">Modern Desinge</h4>
                    <p className="mt-1">Js</p>
                    <p className="mt-1">Bootstrap</p>
                    <p className="mt-1">Sass</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div
                    onClick={() => this.showproj(3)}
                    className=" sec2-pjb  flex-fill text-center"
                  >
                    <div className="screen-shot4" />

                    <h4 className="mt-3">Form Validation</h4>
                    <p className="mt-1">Regex Reference</p>
                    <p className="mt-1">Javascript</p>
                    <p className="mt-1">Sass</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ct5 ">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div
                    onClick={() => this.showproj(4)}
                    className=" sec2-pjb  flex-fill text-center"
                  >
                    <div className="screen-shot3" />

                    <h4 className="mt-3">Digikala H-P Front</h4>
                    <p className="mt-1">Bootstrap</p>
                    <p className="mt-1">Sass</p>
                    <p className="mt-1">Js</p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div
                    onClick={() => this.showproj(5)}
                    className=" sec2-pjb  flex-fill text-center"
                  >
                    <div className="screen-shot2" />
                    <h4 className="mt-3">Instagram H-P UI</h4>

                    <p className="mt-1">Bootstrap</p>
                    <p className="mt-1">Sass</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj ">
                  <div className=" sec2-pjb flex-fill" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-er d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <a
                className="text-light text-center "
                href="https://github.com/amirdana"
              >
                <div className="d-flex justify-content-center">
                  <div className="github"></div>
                </div>
              </a>
              <p className="mt-1 mb-0 pwerd">Powered By React JS</p>
              <p className="mt-2 mb-0">
                Developed and Desinged by Amirhossein lavasani &copy; 2019
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  showproj = projnum => {
    if (projnum === 1) {
      window.open("http://rentic.ir/weatherSt/p-1.html");
    } else if (projnum === 3) {
      window.open("http ://rentic.ir/formval/p3H.html");
    } else if (projnum === 2) {
      window.open("http://rentic.ir/Mdesigne");
    } else if (projnum === 4) {
      window.open("http://rentic.ir/digikalaFr/p3.html");
    } else if (projnum === 5) {
      window.open("http://rentic.ir/instagramUI/p2.html");
    } else {
      //window.open("https://github.com/amirdana/Form-validation");
    }
  };

  popwin = () => {
    document.querySelector(".contact-container").style.top = "100px";
  };

  navpopback = () => {
    document.querySelector(".contact-container").style.top = "-500px";
  };
  scrollyy = divnum => {
    if (divnum === 1) {
      window.scrollTo(0, 0);
    }
    if (divnum === 2) {
      window.scrollTo(0, 800);
    }
    if (divnum === 3) {
      window.scrollTo(0, 1550);
    }
    if (divnum === 4) {
      window.scrollTo(0, 1800);
    }
  };

  scroller = window.addEventListener("scroll", () => {
    let ypos = window.scrollY;
    if (ypos <= 400) {
      document.querySelector(".s1").style.backgroundColor = "#00DCFF";
      document.querySelector(".s2").style.backgroundColor = "#263341af";
      document.querySelector(".s3").style.backgroundColor = "#263341af";
      document.querySelector(".s4").style.backgroundColor = "#263341af";
    } else if (ypos <= 1200 && ypos >= 400) {
      document.querySelector(".s2").style.backgroundColor = "#00DCFF";
      document.querySelector(".s1").style.backgroundColor = "#263341af";
      document.querySelector(".s3").style.backgroundColor = "#263341af";
      document.querySelector(".s4").style.backgroundColor = "#263341af";
    } else if (ypos <= 1600 && ypos >= 1200) {
      document.querySelector(".s3").style.backgroundColor = "#00DCFF";
      document.querySelector(".s2").style.backgroundColor = "#263341af";
      document.querySelector(".s1").style.backgroundColor = "#263341af";
      document.querySelector(".s4").style.backgroundColor = "#263341af";
    } else if (ypos <= 2400 && ypos >= 1600) {
      document.querySelector(".s3").style.backgroundColor = "#00DCFF";
      document.querySelector(".s2").style.backgroundColor = "#263341af";
      document.querySelector(".s1").style.backgroundColor = "#263341af";
      document.querySelector(".s4").style.backgroundColor = "#263341af";
    }
    if (ypos >= 200) {
      document.querySelector(".c-navbar").style.height = "50px";
    } else document.querySelector(".c-navbar").style.height = "70px";
    if (ypos >= 1500) {
      document.querySelector(".c-navbar").style.top = "-80px";
    } else document.querySelector(".c-navbar").style.top = "0px";
  });

  esc = () => {
    let i = 1;
    let bgop = document.getElementById("preload-dlt");
    let t = setInterval(() => {
      bgop.style.opacity = i;
      i = i - 0.1;
      if (i <= 0) {
        clearInterval(t);
        bgop.style.display = "none";
      }
    }, 40);
    document.getElementById("headmid").classList.add("slide-in-right");
    document.getElementById("headtxt").classList.add("slide-in-left");
    document.querySelector(".navigation").classList.add("slide-bottom");

    this.typeWriter();
  };

  e = 0;
  txte = "By the way feel free to check out my PROJECTS.";
  speed = 50;
  typeWriter = () => {
    if (this.e < this.txte.length) {
      document.getElementById("head-ps").innerHTML += this.txte.charAt(this.e);
      this.e++;
      setTimeout(this.typeWriter, this.speed);
    }
  };

  preloadKill = window.addEventListener("load", () => {
    document.getElementById("preload-btn").classList.add("ld-btn");
    document.getElementById("preload-btn").style.display = "block";
    document.getElementById("loaded").classList.remove("tracking-in-expand");
    document.getElementById("loaded").classList.add("preload-txt");
    if (document.getElementById("preload-btn").style.display == "block") {
      document.getElementById("loaded").innerHTML = "Ready!";
    }
  });
}

export default Portfolio;
