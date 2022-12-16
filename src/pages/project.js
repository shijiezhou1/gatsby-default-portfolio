import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Project = (props) => {
    const { description, text, html } = props.location.state;
    return (
        <Layout>
          <h1>{text}:</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <br></br>
          <Link to="/">Go back</Link>
        </Layout>
      )
}

export const Head = () => <Seo title="Project" />

export default Project
