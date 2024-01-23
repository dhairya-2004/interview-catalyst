import React from "react";
import "../CSS/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h3>Interview Catalyst</h3>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/skill">Skill</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="look">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/jash-asmani-55b874222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <LinkedInIcon className="i" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/jash.asmani" target="_blank">
                  <FacebookIcon className="i" />
                </a>
              </li>
              <li>
                <a href="https://github.com/jash2504" target="_blank">
                  <GitHubIcon className="i" />
                </a>
              </li>
            </ul>
          </div>
          <p>Interview Catalyst © 2023. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
