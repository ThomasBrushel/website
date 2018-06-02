import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="col-4">
            <h4><b>Locations</b></h4>
            <p><b>Chicago, IL</b></p>
            <p>333 E Benton Place Suite 103</p>
            <p><b>Mineapolis, MN</b></p>
            <p>120 14th Street West Minneapolis, MN 55403</p>
          </div>
          <div className="col-8">
          <h4><b>Hours</b></h4>
          <div className="container">
            <div className="col-4">
            <p><b>Monday - Thursday</b></p>
            <p>8:00am - 12pm</p>
            </div>
            <div className="col-4">
            <p><b>Friday - Saturday</b></p>
            <p>8:30am - 1pm</p>
            </div>
            <div className="col-4">
            <p><b>Sunday</b></p>
            <p>7:00am - 3pm</p>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
