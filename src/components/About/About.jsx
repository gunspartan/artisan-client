import React from "react";
import ServicesGrid from "../ServicesGrid";
import ServicesContent from "../ServicesContent";
import QuoteButton from "../QuoteButton";
import DesignElement from "../DesignElement";

export default function About() {
  return (
    <div className="dark-bg">
      <div className="container About">
        <div className="about-title">
          <h1>About Us</h1>
          <hr />
        </div>
        <div className="row background">
          <h1 className="background-header">Our Background</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            natus aperiam nam accusantium nulla, officiis error aliquid
            voluptatem consectetur voluptates quae ut sequi nobis culpa fugit
            qui modi! Necessitatibus, minus provident maiores consectetur
            aperiam aliquid fugit suscipit optio doloremque hic molestiae
            inventore, odit est soluta ipsam recusandae debitis earum amet!
          </p>
        </div>
        <div className="row gx-5 justify-content-between about-content">
          <div className="col-lg-4 col-md-9 m-auto">
            <div className="about-content-inner">
              <div className="about-content-inner-headline">
                <h1>We Do Premium Work</h1>
              </div>
              <div className="about-content-inner-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quos ex, quidem omnis harum odio esse neque necessitatibus ullam
                dolorem.
              </div>
              <div className="quote-btn">
                <QuoteButton />
              </div>
            </div>
          </div>

          <div className="col-lg-8 services about">
            <div className="row row-cols-2 justify-content-evenly gy-4">
              {ServicesContent.map((item, index) => {
                return (
                  <div key={index} className="col">
                    <ServicesGrid image={item.image} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <DesignElement word="craftsmanship" cName="craftsmanship about" />
      </div>
      <div className="contact-address container">
        <iframe
          id="map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.7966811847!2d-122.66800278431666!3d49.10950287931282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cfd5b99d93bd%3A0x7147bd7c8f2340f5!2sArtisan%20Residential%20Services!5e0!3m2!1sen!2sca!4v1618784401248!5m2!1sen!2sca"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className="row">
        <div className="address col">
          <h1>Find Us</h1>
          <h2>20111 Industrial Ave #104</h2>
          <h2>Langley City, BC</h2>
          <h2>V3A 4K6</h2>
        </div>
        <div className="contact-email-phone col">
          <h1>Hit me up</h1>
          <h2>info@artisanonline.com</h2>
          <h2>(778) 366-1315</h2>
        </div>
      </div>
      </div>
    </div>
  );
}
