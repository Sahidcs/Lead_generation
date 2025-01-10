import React from 'react';
import './Startwith.css'; // Import your CSS file

const StartWith= () => {
  return (
    <div>
 
        <h2 style={{ position: 'relative', left: '40%', fontSize: 'xx-large' }}>
          <a href="#" target="_blank">
            How can we help?
          </a>
        </h2>
     
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <a
            className="card"
            href="/portal"
            style={{ '--bg-img': "url('https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/latest-linkedin-logo-1.png')" }}
          >
            <div>
              <h1>LinkdIn Prospector</h1>
              <p>
                Effortlessly discover leads, connect with industry leaders, and accelerate business growth through targeted outreach and strategic networking.
              </p>
              <div className="tags"></div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{ '--bg-img': "url('https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2023/01/AdobeStock_279424579-800x450.jpeg')" }}
          >
            <div>
              <h1>Engagement Automation</h1>
              <p>Elevate customer interactions, save time, and boost results by automating personalized outreach and nurturing campaigns with precision.</p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{ '--bg-img': "url('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PsnGY7NGiSg7rF2TkVFEUA.png')" }}
          >
            <div>
              <h1>TorioxLead Database</h1>
              <p>Optimize data management, enhance decision-making, and drive business success with our comprehensive, secure, and scalable information repository.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default StartWith;
