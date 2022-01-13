import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {

  return (
  <Layout>
    <Seo title="Home" />
    <h1>Zam's Thought</h1>
    <h4 className="">Number of thoughts: {data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(blog => (
      <div key={blog.node.id}>
      <h1  className=""> {blog.node.frontmatter.title}</h1>
      <h4  className=""> {blog.node.frontmatter.date}</h4>
      <p className=""> {blog.node.excerpt}</p>
      </div>
    )
    )}
    
  </Layout>
)}
export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          html
          excerpt
        }
      }
    }
  }
`
