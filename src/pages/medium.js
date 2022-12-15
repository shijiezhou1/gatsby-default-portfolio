import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Medium = () => (
  <Layout>
    <h1>Hi from the Medium page</h1>
    <h2>welcome to Medium page </h2>
    <h2>welcome to Medium page </h2>
    <h2>welcome to Medium page </h2>
    <h2>welcome to Medium page </h2>
    <h2>welcome to Medium page </h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Medium" />

export default Medium
