import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

const Header = ({ logo, links }) => (
  <header>
    <h1>{logo}</h1>
    <nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.text}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string
};

class Aside extends Component {
  state = {
    menuOpened: false
  };

  animateMenu() {
    const { menuOpened } = this.state;
    this.setState( {menuOpened: !menuOpened} )
    console.log(menuOpened);
  }

  render() {
    const { links, logo } = this.props;
    const { menuOpened } = this.state;

    const menuAimation = menuOpened === true ? 'open' : '';
    return (
      <aside id="menu" className={menuAimation}>
        <button onClick={() => this.animateMenu()}>Hamburger</button>
        <h1>{logo}</h1>
        <nav>
          <ul>
            {links.map(link => {
              return (
                <li key={link.text}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    );
  }
}

Aside.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string
};

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Work = () => <h1>Work</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  render() {
    const data = {
      links: [
        {
          url: './',
          text: 'Home'
        },
        {
          url: './about',
          text: 'About'
        },
        {
          url: './work',
          text: 'Work'
        },
        {
          url: './contact',
          text: 'Contact'
        }
      ]
    };

    return (
      <Router>
        <div className="wrap">
          <Aside logo={'Logo'} links={data.links} />
          <main>
            <Header logo={'Logo'} links={data.links} />
            <section>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </section>
            <footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;