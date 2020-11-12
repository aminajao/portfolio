import * as React from "react";
import "../styles/home.scss";

function Home() {
  return (
    <div className="app">
      <div className="avatar">
        <div className="circle">
          <div className="circle">
            <img alt="marvin" src={require("../assets/avatar.jpg")} />
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Ajao Al-Amin</h1>
        <div className="title">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://aminajao.netlify.app"
          >
            {" "}
            Frontend Developer{" "}
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://tropixel.com.ng"
          >
            {" "}
            Lead Developer @ Tropixel BS
          </a> */}
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1I3y3V2YD3dTgFzWatrp4cly-RgT5iT9T/view?usp=drivesdk"
          >
            <span>Resume</span>
            <ion-icon name="download"></ion-icon>
          </a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>

          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bildev.hashnode.dev"
          >
            <span>Blog</span>
          </a> */}
        </div>
        <br />
        <br />
        Hi! I'm Amin, you can also call me bilal.
        <br />
        <br />
        I am a javascript engineer working majorly on
        frontends and UIs of applications with technologies like react, redux, react-hooks, typescript,
        Apollo, nextjs, css, chakraUI, ant-design and also have plans to pick up vue and nuxt soon.
        Aside working on the frontend, I also do some nodejs, expressjs, mongoDB, as well as react native and flutter/dart.
         {/* I'm also experienced in building elegant softwares in a team as a major contributor. */}
        <br />
        <br />
        I love bringing designs to life and learning/exploring new technologies.
        <br />
        <br />
        {/* <br /> */}
        <div className="connect">
          <span>Some live projects: </span>
          <a
          className="project"
            rel="noopener noreferrer"
            target="_blank"
            href="https://pipcleaning.ng"
          > PIP Cleaning |
          </a>
          <a
          className="project"
            rel="noopener noreferrer"
            target="_blank"
            href="https://techgenafrica.com"
          > TechGen Africa |
          </a>
          <a
          className="project"
            rel="noopener noreferrer"
            target="_blank"
            href="https://itazkir.com"
          > I-Tazkir
          </a>
        </div>
        <br />
        <div className="connect">
          <span>Connect with me |</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/aminajao"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/amin_ajao"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/aminajao"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:aminajao96@gmail.com"
          >
            <ion-icon name="mail"></ion-icon>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bildev.hashnode.dev/"
          >
            <ion-icon name="book"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
