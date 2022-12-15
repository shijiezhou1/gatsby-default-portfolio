import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CV = () => (
  <Layout>
    <h1>Hi from the cv page</h1>
    <p>Welcome to cv 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="CV" />

export default CV
