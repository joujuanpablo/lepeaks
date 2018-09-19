import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';
 import { Link } from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainNav extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollHeader);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScrollHeader);
  }

  handleScrollHeader() {
    let scrollTop = window.scrollY

    if (scrollTop > 2) {
       document.querySelector("header").classList.add("scrolled");
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }

  }

  render() {
    const { logo } = this.props;
    

    return (
      <div className="main-nav--wrapper">
        <Navbar className="main-nav" dark expand="md">
          <NavbarBrand href="/" className="">
            <img className="navbar-brand--image" alt="lepeaks logo" src={logo}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={"/gallery"} onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
              </NavItem>
              <NavItem>
                <Link to={"/story"} onClick={() => window.scrollTo(0, 0)}>Story</Link>
              </NavItem>
              <NavItem>
                <Link to={"/events"} onClick={() => window.scrollTo(0, 0)}>Events</Link>
              </NavItem>
              <NavItem>
                <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>Contact</Link>
              </NavItem>
              <NavItem>
                <Link to={"https://www.instagram.com/lepeaksmusic/"}>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"https://www.facebook.com/lepeaks"}>
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg"/>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"https://www.youtube.com/channel/UC4gja3SBSN83BRz750O7ryw"}>
                <FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"https://soundcloud.com/user-953480858"}>
                  <FontAwesomeIcon icon={['fab', 'soundcloud']} size="lg" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to={""}>
                  <FontAwesomeIcon icon={['fab', 'spotify']} size="lg" />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;