import React, { Component } from 'react';

// React routing
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Menu from './components/pages/menu';
import Contact from './components/pages/contact';

// Includes
import './css/styles.css'

class App extends Component {
  render() {
    return (
      // Router
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

          <Header />
            <Route exact path="https://thomasbrushel.github.io/website/" component={Homepage} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
