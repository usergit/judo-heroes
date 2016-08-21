"use strict";

const React = require('react');
const Link = require('react-router').Link;

class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a simple demo application to showcase how to achieve universal rendering with <strong>React</strong> and <strong>Express</strong>.
          </p>

          <p>
            If you want to know more about Universal JavaScript have a look at the book <a href="https://nodejsdesignpatterns.com">Node.js Design Patterns</a>.
          </p>
          
          <p>
            Built with <strong>❤</strong>︎ and <strong>code</strong> by <a href="http://loige.co" target="_blank">loige</a>.
            Contribute to the code on <a href="https://github.com/lmammino/judo-heroes">GitHub</a> or 
            read the make of article on <a href="http://scotch.io">Scotch.io</a>
          </p>
        </footer>
      </div>
    );
  }
}

module.exports = Layout;
