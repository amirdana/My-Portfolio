import React from "react";
import "./style.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
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
          <div className="compatible d-flex flex-column ">
            <i className="fa fa-firefox fa-lg" />
            <i className="fa fa-chrome fa-lg" />
            <i className="fa fa-edge fa-lg" />
          </div>
        </div>
        <header>
          <div className="navigation">
            <div onClick={this.scroll1} className="s1  ">
              <a href="#scroll1">Home</a>
            </div>

            <div onClick={this.scroll2} className="s2">
              <a href="#scroll2"> Skills</a>
            </div>

            <div onClick={this.scroll3} className="s3">
              <a href="#scroll3">Projects</a>
            </div>

            <div onClick={this.scroll4} className="s4">
              <a href="#scroll4">Resume</a>
            </div>
          </div>
          <a name="scroll1" />
          <div
            className="header-left  d-flex justify-content-center align-items-center"
            id="head-bg"
          >
            <div className="row mx-2">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <div id="headtxt" className="fit-txt ">
                  <div id="head-h2" className="glitch" data-text="My Story">
                    {"{ My Story }"}
                  </div>
                  <p className="preload-upg">
                    {" "}
                    About three years ago after forcing myself to love what i do
                    , i started to do what i truly passionate about, that's when
                    my journey to being a programmer started, "story short", now
                    im a Front-End Developer and im loving it since day one.
                    <br />
                    <br />
                    <strong id="head-ps"> </strong>
                  </p>
                  <a
                    className="text-dark"
                    target="_blank"
                    href="https://github.com/amirdana"
                  >
                    <i className="fa fa-github fa-2x" />
                  </a>
                </div>
              </div>
              <div
                id="headmid"
                className="col-md-6 col-sm-12 d-flex justify-content-center"
              >
                <form className="head-form text-white mr-5">
                  <h2 className="text-center mb-4 text-light">Contact Me</h2>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <input
                      type=""
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                      Another label
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input"
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section>
          <a name="scroll2" />
          <div className="sec1-bg d-flex align-items-center justify-content-center ">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 col-sm-6 ct">
                <div id="r1" className="rez-1 m-3 text-center ">
                  <i className="fa fa-android andr" />
                  <div className="ct2 ">
                    <p className="pt-5">Dominate on B4A</p>
                    <p className="rellax">Hybrid OOP</p>
                    <p className="">Hardware engaged programing</p>
                    <p className="">Couple of published app</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ct">
                <div id="r1" className="rez-2 m-3 text-center ">
                  <i className="fa fa-globe web" />
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
              <div className="col-md-4 col-sm-6 ct">
                <div id="r3" className="rez-3 m-3 text-center">
                  <i className="fa fa-windows win" />
                  <div className="ct2 ">
                    <p className="pt-5">Familar with </p>
                    <p className="">C C++ C# </p>
                    <p className="">phyton</p>
                    <p className="">Visual studio</p>
                    <p className="">OOP</p>
                    <p className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <a name="scroll3" />
          <div className="sec2-bg d-flex flex-column align-items-center justify-content-center">
            <div
              id="head-h2"
              className="glitch text-dark text-center text-dark txt-shadow"
              data-text="Projects"
            >
              perojects
            </div>
            <span className="span-line" />
            <div className="ct5 d-flex align-items-center justify-content-center">
              <div className="row  d-flex justify-content-center">
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb  flex-fill text-center">
                    <div className="screen-shot1" />
                    <h4 className="mt-3">Weather Status</h4>
                    <p className="mt-1">Darksky API</p>
                    <p className="mt-1">Vanilla Js</p>
                    <p className="mt-1">Sass</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb  flex-fill text-center">
                    <div className="screen-shot2" />
                    <h4 className="mt-3">Instagram UI</h4>
                    <p className="mt-1">Bootstrap</p>
                    <p className="mt-1">Sass</p>
                    <p className="mt-1" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb flex-fill" />
                </div>
              </div>
            </div>
            <div className="ct5 d-flex align-items-center justify-content-center">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb flex-fill" />
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb flex-fill" />
                </div>
                <div className="col-md-4 col-sm-6 sec2-pj">
                  <div className=" sec2-pjb flex-fill" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="foot-er d-flex align-items-end justify-content-center">
            <div className="d-flex flex-column justify-content-center">
              <p className="mb-3">
                Dveloped and Desinged by Amirrrhossein lavasani &copy; 2019
              </p>

              <a
                className="text-light text-center mb-3"
                target="_blank"
                href="https://github.com/amirdana"
              >
                <i className="fa fa-github fa-2x" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  scroll1 = () => {
    document.querySelector(".s1").style.backgroundColor = "#8a8a8ae5";
    document.querySelector(".s2").style.backgroundColor = "#263341af";
    document.querySelector(".s3").style.backgroundColor = "#263341af";
    document.querySelector(".s4").style.backgroundColor = "#263341af";
  };
  scroll2 = () => {
    document.querySelector(".s2").style.backgroundColor = "#8a8a8ae5";
    document.querySelector(".s1").style.backgroundColor = "#263341af";
    document.querySelector(".s3").style.backgroundColor = "#263341af";
    document.querySelector(".s4").style.backgroundColor = "#263341af";
  };
  scroll3 = () => {
    document.querySelector(".s3").style.backgroundColor = "#8a8a8ae5";
    document.querySelector(".s2").style.backgroundColor = "#263341af";
    document.querySelector(".s4").style.backgroundColor = "#263341af";
    document.querySelector(".s1").style.backgroundColor = "#263341af";
  };
  scroll4 = () => {
    document.querySelector(".s4").style.backgroundColor = "#8a8a8ae5";
    document.querySelector(".s2").style.backgroundColor = "#263341af";
    document.querySelector(".s3").style.backgroundColor = "#263341af";
    document.querySelector(".s1").style.backgroundColor = "#263341af";
  };

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
  txte = "By the way feel free to check out my portfolio.";
  speed = 50;
  typeWriter = () => {
    if (this.e < this.txte.length) {
      document.getElementById("head-ps").innerHTML += this.txte.charAt(this.e);
      this.e++;
      setTimeout(this.typeWriter, this.speed);
    }
  };

  forceLoad = setTimeout(() => {
    document.getElementById("preload-btn").disabled = false;
    let apy = document.getElementById("preload-btn").classList;
    apy.add("btn");
    apy.add("btn-lg");
    apy.add("btn-outline-light");
    document.getElementById("loaded").classList.remove("tracking-in-expand");
    document.getElementById("loaded").classList.add("preload-txt");
    document.getElementById("loaded").innerHTML = "Ready!";
  }, 15000);

  preloadKill = window.addEventListener("load", () => {
    let apy = document.getElementById("preload-btn").classList;
    apy.add("btn");
    apy.add("btn-lg");
    apy.add("btn-outline-light");
    document.getElementById("loaded").classList.remove("tracking-in-expand");
    document.getElementById("loaded").classList.add("preload-txt");
    document.getElementById("loaded").innerHTML = "Ready!";
  });
}

export default Portfolio;
