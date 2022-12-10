import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>Hi from the about page</h1>
    <h2>welcome to about page </h2>
    <h2>welcome to about page </h2>
    <h2>welcome to about page </h2>
    <h2>welcome to about page </h2>
    <h2>welcome to about page </h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About | SHIJIE ZHOU" />

export default About
