import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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

const Tabs = styled.div`
  .tabs {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    padding: 10rem 0 2rem;
  }

  .tab {
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    text-transform: uppercase;

    &.active {
      text-decoration: underline;
    }
  }
`
const StorePage = data => {
  const [activeTab, setActiveTab] = React.useState("")
  //   const heroData = _.get(data, "data.contentfulPage")
  const productsGridData = _.get(data, "data.allContentfulProduct.edges")
  const tabs = _.get(data, "data.allContentfulCategory.edges")
  const filteredProductsGridData = React.useMemo(() => {
    if (!activeTab) {
      return productsGridData
    }
    return productsGridData.filter(({ node }) => node.category.id === activeTab)
  }, [activeTab])
  //   const blogData = _.get(data, "data.allContentfulBlog.edges")
  //   console.log({ data })
  //   tabs.map((e, i) => console.log(e.node.title))
  return (
    <Layout headerClassName="total-light">
      <SEO
        title="Home"
        keywords={[`gatsby`, `oneshopper`, `react`, `Ecommerce`]}
      />
      <Tabs>
        <div className="tabs">
          {tabs.map((e, i) => (
            <div
              className={`${e.node.id === activeTab ? "tab active" : "tab"}`}
              onClick={() => setActiveTab(e.node.id)}
              key={i}
            >
              {e.node.title}
            </div>
          ))}
        </div>
      </Tabs>

      <ProductsGrid items={filteredProductsGridData} title="" />
      {/* <Hero {...heroData} />
      <ProductsGrid items={productsGridData} />
      <LatestBlogs items={blogData} /> */}
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

export default StorePage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct {
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
    allContentfulCategory {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`
