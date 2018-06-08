import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385789/title-brunch.jpg" alt={"Homless Women"}/>
          <div className="hero-overlay"></div>
            <div className="container">
            <div className="hero-text column">
              <h1 className="hero-title">Eggy's Cafe</h1>
              <p className="hero-intro">Changing the World One Bite at a Time</p>
              <a href={"/menu"}><button className="btn primary">View Menu</button></a>
            </div>
            </div>
        </div>
        <section className="section-md">
          <div className="container align-center">
            <div className="col-6 pad-me-o-small">
              <h1 className="heading-level-one">Our Story</h1>
              <p>Humblebrag keytar cliche activated charcoal venmo brooklyn beard. Craft beer everyday carry man bun mumblecore sartorial adaptogen affogato cray butcher glossier iceland. Iceland whatever brooklyn [...]</p>
              <a className="callout-link" href={"/"}>Read Full Story</a>
            </div>
            <div className="col-6">
              <img className="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385789/real-bruch-image.jpg" alt={"Brunch"} />
            </div>
          </div>
        </section>

        <section className="section-md">
          <div className="section-img">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385789/7ccbe202623849cf853375042b4138f2.jpg" alt={"Good Food"} />
            <div className="section-overlay"></div>
              <div className="section-text-overlay">
              <div className="container">
              <h1 className="heading-level-one">See what everyones raving about</h1>
              <p>Pour-over jean shorts vexillologist disrupt, put a bird on it hoodie letterpress pop-up synth narwhal raw denim chicharrones sartorial ramps Pour-over jean shorts vexillologist disrupt, put a bird on it hoodie letterpress pop-up synth narwhal raw denim chicharrones sartorial ramps</p>
              </div>
              </div>
          </div>
        </section>

        <section className="section-md">
          <div className="container align-center">
            <div className="col-6">
            <img class="img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385789/brunch-pic.jpg" alt={"Brunch Food"} />
            </div>
            <div className="col-6">
              <h1 className="heading-level-one">Culinary Delight</h1>
              <p>Venmo humblebrag artisan, lumbersexual small batch iPhone pug adaptogen locavore keytar stumptown mumblecore polaroid single-origin coffee gluten-free. Salvia letterpress kale chips 8-bit knausgaard intelligentsia yr direct trade banh mi. Pug blue bottle food truck shaman twee, green juice.</p>
              <a className="callout-link" href={"/"}>Read Full Story</a>
            </div>
            
          </div>
        </section>
      </div> // Closing Component Tag
    );
  }
}

export default Homepage;
