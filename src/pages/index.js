import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
// import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from "react-star-rating-component"
import { graphql } from "gatsby"
import _ from "lodash"
import Hero from "../components/Hero"
import ProductsGrid from "../components/ProductsGrid"
import LatestBlogs from "../components/LatestBlogs"

const IndexPage = data => {
  const heroData = _.get(data, "data.contentfulPage")
  const productsGridData = _.get(data, "data.allContentfulProduct.edges")
  const blogData = _.get(data, "data.allContentfulBlog.edges")
  // console.log({ blogData })
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `oneshopper`, `react`, `Ecommerce`]}
      />
      <Hero {...heroData} />
      <ProductsGrid items={productsGridData} title="Latest arrivals" />
      <LatestBlogs items={blogData} />
      {/* <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <LatestBlogs data={data.data.allContentfulBlogs} />
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Latest Items</h2>
      </div>
      <IndexPost data={data}></IndexPost>
    </div>
    <Countdown data={data.data.contentfulDealCountDown} /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query AboutQuery {
    contentfulPage(id: { eq: "a2232fcf-ad66-58db-9a3f-99adbbe498a2" }) {
      id
      title
      heroImage {
        fluid {
          srcSet
          src
          tracedSVG
        }
      }
      description {
        description
      }
    }
    allContentfulProduct(sort: { fields: createdAt }, limit: 8) {
      edges {
        node {
          images {
            fluid {
              srcSet
              src
              tracedSVG
            }
          }
          hotItem
          featured
          createdAt
          category {
            title
            id
          }
          id
          slug
          price
          title
          updatedAt
          description {
            description
          }
        }
      }
    }
    allContentfulBlog(limit: 3, sort: { fields: createdAt }) {
      edges {
        node {
          title
          slug
          image {
            fluid {
              src
              srcSet
              tracedSVG
            }
          }
        }
      }
    }
  }
`
