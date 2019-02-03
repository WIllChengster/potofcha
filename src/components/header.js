import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `green`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul 
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        listStyleType: 'none',
      }} 
    >
      <li >
        <Link
          to="/"
          style={{textDecoration: 'none'}}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/menu"
          style={{textDecoration: 'none'}}  
        >
          Menu
        </Link>
      </li>
      <li>
        <Link 
          to="/about-us"
          style={{textDecoration: 'none'}}
        >
        About us
        </Link>
      </li>
      <li>
        <Link 
          to="/contact"
          style={{textDecoration: 'none'}}
        >
          Contact
        </Link>
      </li>

    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
