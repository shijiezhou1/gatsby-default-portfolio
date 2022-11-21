import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="Shijie Zhou logo"
      height={20}
      style={{ margin: 0 }}
      src="https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/logo-text.png"
    />
  </header>
)

export default Header
