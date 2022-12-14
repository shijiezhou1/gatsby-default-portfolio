import * as React from "react"
import { Link } from "gatsby"
import { imgMapping } from "../config/image"

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
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <Link
      to="/"
    >
      <img
        alt="Shijie Zhou logo"
        height={40}
        style={{ margin: 0 }}
        src={imgMapping["logo-text.png"]}
      />
    </Link>
  </header>
)

export default Header