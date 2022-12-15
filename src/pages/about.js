import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>About:</h1>
    <div>
      Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview Project organization. Currently, he is working in Code 9, Pte Ltd software engineer. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD. He gained experience in media use and computer art. He also familiar with web design and customize selling pages on ebay which promote stuffs at leisure time.

      Read more: http://www.shijiezhou.com/#ixzz7nVO4nucc
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
