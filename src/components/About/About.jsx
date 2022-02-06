import React from "react";
import ServicesGrid from "../ServicesGrid";
import ServicesContent from "../ServicesContent";
import QuoteButton from "../QuoteButton";
import DesignElement from "../DesignElement";

export default function About() {
  return (
    <div className='dark-bg'>
      <div className='container About'>
        <div className='about-title'>
          <h1>About Us</h1>
          <hr />
        </div>
        <div className='row background'>
          <h1 className='background-header'>Our Mission</h1>
          <p>
            Artisan strives to provide exceptional service and quality products to our clients. We believe in quality,
            integrity, craftsmanship, and exceptional customer service.
          </p>
        </div>
        <div className='row gx-5 justify-content-between about-content'>
          <div className='col-lg-4 col-md-9 m-auto'>
            <div className='about-content-inner'>
              <div className='about-content-inner-headline'>
                <h1>What We Believe In:</h1>
              </div>
              <div className='about-content-inner-description'>
                We believe in the value of craftsmanship and pride ourselves on our skills. We provide unsurpassed
                service for our customers from beginning to end... and beyond!
              </div>
              <div className='quote-btn'>
                <QuoteButton />
              </div>
            </div>
          </div>

          <div className='col-lg-8 services about'>
            <div className='row row-cols-2 justify-content-evenly gy-4'>
              {ServicesContent.map((item, index) => {
                return (
                  <div key={index} className='col'>
                    <ServicesGrid image={item.image} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <DesignElement word='craftsmanship' cName='craftsmanship about' />
      </div>
      <div className='contact-address container'>
        <iframe
          id='map'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.0891301540623!2d-122.65923838445974!3d49.10394719133948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cfd28a5bb341%3A0x2cad3d47f41224a!2s20399%20Douglas%20Crescent%2C%20Langley%2C%20BC%20V3A%208T4!5e0!3m2!1sen!2sca!4v1644180751030!5m2!1sen!2sca'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
        <div className='row'>
          <div className='address col'>
            <h1>Find Us</h1>
            <h2>12345 Main Street</h2>
            <h2>Langley, BC</h2>
            <h2>A1B 2C3</h2>
          </div>
          <div className='contact-email-phone col'>
            <h1>Contact us</h1>
            <h2>info@email.com</h2>
            <h2>(778) XXX-XXX</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
