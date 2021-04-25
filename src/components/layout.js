/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 10px;
    color: #333;
    background-color: #f1f1f1;
    font-family: Helvetica, sans-serif;
  }

  & * {
    box-sizing: border-box;
  }

  .l-layout {
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .main-title {
    font-size: 2.4rem;
    text-align: center;
    padding: 1rem;
    text-transform: uppercase;
     &::after, &::before {
      margin-top: 2rem;
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      background: rgb(51, 51, 51);
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 0) 10%,
        rgba(51, 51, 51, 0.9) 45%,
        rgba(51, 51, 51, 0.9) 55%,
        rgba(51, 51, 51, 0) 89%
      );
      margin: 1rem auto;
      width: 30rem;
    }
  }

  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0 0 1rem;
    /* Fix of Webkit flickering */
    z-index: 1;
    width: 100%;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .slide-box {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .slide-title,
  .slide-description {
    color: #fff;
    font-size: 24px;
  }
  .slide-description {
    font-size: 18px;
  }
  .slide-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .carousel-title {
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 2.4rem;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin: 10px 0 0;
    .swiper-pagination-bullet {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      opacity: 0.4;
      background-color: #333;
      margin: 0 5px;
      transition: transform 100ms ease;
      cursor: pointer;

      &.swiper-pagination-bullet-active {
        opacity: 0.7;
        transform: scale(1.5);
        cursor: default;
      }
    }
  }
`

const Layout = ({ children, headerClassName }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // console.log({ 1: data })
      return (
        <>
          <GlobalStyle />
          <Header
            siteTitle={data.site.siteMetadata.title}
            className={headerClassName}
          />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
