import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import StarRatingComponent from "react-star-rating-component"
import styled, { createGlobalStyle } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, A11y, EffectFade, Pagination } from "swiper"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"
import _ from "lodash"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../containers"
import { SCREEN } from "../styles"
SwiperCore.use([Pagination])

const ProductDetailsComponent = styled.div`
  max-width: 192rem;
  margin: 0 auto;
  padding: 5rem 0;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }

  .title {
    font-size: 3.6rem;
    margin: 0;
  }
  .box {
    padding: 2rem;
    font-size: 2rem;

    li {
      line-height: 1.5;
      margin: 5% 0;
    }
  }
  .price {
    padding: 1rem;

    color: #fff;
    font-size: 3rem;
    padding: 1rem 0;
    span {
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0.5rem 1rem;
    }
  }

  .image {
    width: 100%;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    &::after {
      display: block;
      width: 100%;
      content: "";
      padding-bottom: 100%;
    }
  }

  ${Button} {
    color: #333;
    border-color: #333;
    width: 30rem;
    height: 5rem;
    margin: 2rem 0;
  }

  ${SCREEN.L_DOWN} {
    .box {
      font-size: 1.8rem;
      li {
        margin: 2rem 0;
      }
    }
  }

  ${SCREEN.TL_DOWN} {
    .grid {
      grid-template-columns: 1fr;
    }

    .price {
      text-align: center;
    }

    ${Button} {
      margin: 1rem auto;
    }
  }
`

const ProductDetails = data => {
  const productData = _.get(data, "data.contentfulProduct")
  return (
    <Layout headerClassName="total-light">
      <SEO title={productData.title} keywords={[productData.title]} />
      <ProductDetailsComponent>
        <div className="grid">
          <Swiper slidesPerView={1}>
            {productData.images.map((image, i) => (
              <SwiperSlide key={i}>
                <Img className="image" fluid={image.fluid} alt={`Image`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="box">
            <h2 className="title">{productData.title}</h2>
            <ul>
              <li>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </li>
              <li>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </li>
              <li>Far far away, behind the word mountains,</li>
              <li>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </li>
            </ul>
            <div className="price">
              <span>$ {productData.price}</span>
            </div>
            <Button>ADD to cart</Button>

            {/* <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  productData.childContentfulProductDescriptionRichTextNode
                ),
              }}
            /> */}
          </div>
        </div>
      </ProductDetailsComponent>
    </Layout>
  )
}

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      price
      id
      featured
      hotItem
      createdAt
      title
      description {
        description
      }
      images {
        fluid {
          src
          srcSet
          tracedSVG
        }
      }
      childContentfulProductDescriptionRichTextNode {
        content {
          nodeType
          content {
            value
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
        }
        nodeType
      }
    }
  }
`
