import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import _ from "lodash"
// import "../css/font-awesome.css"
// import "bootstrap/dist/css/bootstrap.css"
// import "../css/style.css"
import SEO from "../components/seo"
import logo from "../images/oneshopper-logo.png"
import { SCREEN } from "../styles"

const HeaderComponent = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  transition: 300ms background linear;

  &.light {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &.total-light {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .grid {
  }

  .navbar-nav {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }

  .nav-item {
    list-style: none;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  ${SCREEN.TP_DOWN} {
    .nav-link {
      font-size: 1.4rem;
      padding: 0.5rem;
      margin: 0.5rem;
    }
  }
`
const Header = ({ siteTitle, className }) => {
  const [isLight, setIsLight] = React.useState(false)
  const handleScroll = React.useCallback(e => {
    const scrollTop = _.get(e, "target.documentElement.scrollTop", 0)
    // console.log({ scrollTop })
    if (scrollTop > 50) {
      return setIsLight(true)
    }

    setIsLight(false)
  })
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })
  return (
    <HeaderComponent
      className={isLight ? `${className} light` : className || ""}
    >
      <SEO></SEO>
      <div className="grid">
        <Link className="header-logo" to="/">
          {/* <img src={logo} alt="logo"></img> */}
        </Link>
        <div className="row">
          <div className="col-sm-12 col-md-4 align-self-center">
            <Link className="header-logo" to="/">
              {/* <img src={logo} alt="logo"></img> */}
            </Link>
          </div>
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  Store
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </HeaderComponent>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
