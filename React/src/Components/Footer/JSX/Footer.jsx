import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {/* A Computer Science Portal for Geeks! */}
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>INTERVIEW CATALYST</Heading>
            <FooterLink href="#">Questions</FooterLink>
            <FooterLink href="#">Help</FooterLink>
          </Column>
          <Column>
            <Heading>Top Searches</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Get Started</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa fa-linkedin-in">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  LinkedIn
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
