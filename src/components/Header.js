import React, { Component } from 'react';
import {Link} from "react-router";
import About from "./About";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openAbout:false
    };
  }

  handleClick() {
    if(!this.state.openAbout)
      document.body.classList.add('no-scroll');
    else
      document.body.classList.remove('no-scroll');
    this.setState({
      openAbout:!this.state.openAbout
    })
  }

  render() {
    var classes = "header__right"
    if(this.state.openAbout)
      classes = "header__right header__right--open";
    return (
      <div className="header">
        <div className="header__left">
          <Link to="/">matthieu bessol</Link>
        </div>
        <div className={classes} onClick={this.handleClick.bind(this)}>
          <div className="button__about"></div>
          <div className="button__about"></div>
        </div>
        <About isOpen={this.state.openAbout}/>
      </div>
    );
  }
}

export default Header;
