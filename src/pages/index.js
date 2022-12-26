import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { links } from "../config/links"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
  { text: "Upload center", url: "upload" },
  { text: "About", url: "about" },
  { text: "Contact", url: "contact" },
  { text: "CV", url: "cv" }
]

const IndexPage = () => {
  // const navigate = useNavigate();
  const goToRouter = () => {
    // () => navigate(`/${link.text.toLowerCase()}`)
  }

  return (
    <Layout>
      <div className={styles.textCenter}>
        <img src="https://gist.githubusercontent.com/shijiezhou1/8ec733adee53b8bf6ef78d9aa42b9dff/raw/1301e206e342d4ac9801a21260b5bd98e4d228d0/ABOUTME.gif" style={{ marginBottom: `var(--space-3)`, width: `100%` }} />
        <p className={styles.intro}>
          <b>Navigation: </b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div>
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <Link className={styles.listItemLink} to={"/project"} state={link} >
              {link.text} ↗
            
            <div className={styles.linkContainer}>
              <div className={styles.linkImage} ><img src={link.url} /></div>
              <div className={styles.linkDescription} ><p className={styles.listItemDescription}>{link.description}</p></div>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
