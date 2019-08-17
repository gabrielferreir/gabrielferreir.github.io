import React from "react"
import {graphql} from "gatsby"

import "./blogTemplate.css"
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import SEO from "../components/seo";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data; // data.markdownRemark holds our post data
    const {frontmatter, html, excerpt} = markdownRemark;
    console.log('markdownRemark', markdownRemark);
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={excerpt}
            />
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{frontmatter.title}</title>
            </Helmet>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <div className='date'>{frontmatter.date}</div>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                </div>
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      excerpt
    }
  }
`
