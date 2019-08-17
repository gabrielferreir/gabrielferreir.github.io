import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout";
import Post from "../components/post";
import SEO from "../components/seo";

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
                <Post path={edge.node.frontmatter.path}
                      image={edge.node.frontmatter.image}
                      description={edge.node.excerpt}
                      title={edge.node.frontmatter.title}
                      date={edge.node.frontmatter.date}

                />
            );
        });

    return <Layout>
        <SEO title="gabrielferreir.github.io"
             description="Um Blog com posts sobre Flutter, Javascript, BLOC, React e outras tecnologias."
             meta={[{
                 'keywords': 'Blog, Flutter, Gabriel Ferreira, BLOC, Javascript, React'
             }]}
        />
        {Posts}
    </Layout>
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
