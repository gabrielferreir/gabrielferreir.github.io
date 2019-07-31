import React from "react"
import {graphql} from "gatsby"
import {Link} from "gatsby"
import Layout from "../components/layout";

const IndexPage = ({
                       data: {
                           allMarkdownRemark: {edges},
                       },
                   }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => {
            console.log(edge);
            return (
                <Link to={edge.node.frontmatter.path}>
                    <h1>{edge.node.frontmatter.title}</h1>
                    <img src={edge.node.frontmatter.image} />
                    <div>{`${edge.node.excerpt}`}</div>
                </Link>);
        });

    return <Layout>{Posts}</Layout>
};

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          image
          date
          path
          title
        }
        excerpt
      }
    }
  }
}
`;
