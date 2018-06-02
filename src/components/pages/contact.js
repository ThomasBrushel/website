import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="padding-lg">
        <div className="container">
        <div className="col-12">
        </div>
          <div className="col-6">
            <h1>Contact</h1>
              <p>Bacon ipsum dolor amet jowl turducken filet mignon shankle, pork loin beef burgdoggen buffalo turkey tongue doner. Short ribs shankle buffalo bresaola porchetta, spare ribs filet mignon flank shoulder pastrami hamburger. </p>
              <p>Bacon ipsum dolor amet jowl turducken filet mignon shankle, pork loin beef burgdoggen buffalo turkey tongue doner. Short ribs shankle buffalo bresaola porchetta, spare ribs filet mignon flank shoulder pastrami hamburger. </p>
              <p>Bacon ipsum dolor amet jowl turducken filet mignon shankle, pork loin beef burgdoggen buffalo turkey tongue doner. Short ribs shankle buffalo bresaola porchetta, spare ribs filet mignon flank shoulder pastrami hamburger. </p>
              <h2>Phone</h2>
              <p>Chicago Location <a className="phone-number" href={""}>(216) 266-2361</a></p>
              <p>Mineapolis Location <a className="phone-number" href={""}>(414) 325-1261</a></p>
            </div>

            <div className="col-6">
              <div className="container">
                <div className="col-6">
                  <label className="st-label block" for="text">First Name</label>
                  <input className="st-input full-width" type="text" required placeholder="First Name"/>
                </div>
                <div className="col-6">
                  <label className="st-label block" for="text">Last Name</label>
                  <input className="st-input full-width" type="text" required placeholder="Last Name"/>
                </div>
              </div>
              <label className="st-label block" for="text">Phone Number</label>
              <input className="st-input full-width" type="text" required placeholder="Phone Number"/>
              <textarea className="st-input full-width" rows="15" required placeholder="Message"></textarea>
              <a href={"/menu"}><button className="btn primary">Send</button></a>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact;
