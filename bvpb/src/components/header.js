import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { jssPreset } from "@material-ui/styles";

const Header = ({ siteTitle }) => (
  <AppBar
    style={{
      background: `rebeccapurple`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 0.0875rem`,
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
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
