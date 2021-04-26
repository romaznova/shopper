import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Button } from "../../containers"
import { SCREEN } from "../../styles"

const ProductsGridComponent = styled.div`
  padding: 1rem 0;
  .grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 25%);
  }

  .card {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 1rem;
  }

  .inner {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9122023809523809) 16%,
      rgba(241, 241, 241, 0.9037990196078431) 50%
    );
    width: 100%;
    padding-bottom: 2rem;
    overflow: hidden;
    position: relative;
  }

  .image {
    width: 100%;
    &::after {
      width: 100%;
      display: block;
      content: "";
      padding-bottom: 120%;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    margin-bottom: 1rem;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .title {
    font-size: 1.6rem;
    margin: 0.5rem;
    font-weight: 400;
  }

  .title {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      background: rgb(51, 51, 51);
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 0) 10%,
        rgba(51, 51, 51, 1) 45%,
        rgba(51, 51, 51, 1) 55%,
        rgba(51, 51, 51, 0) 89%
      );
      margin-bottom: 1rem;
    }
  }

  .price {
    font-size: 1.6rem;
    margin: 0;
    padding: 0.5rem 1rem;
    color: green;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: 300;
  }

  .mark {
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 20rem;
    padding: 0.5rem;
    background-color: red;
    color: #fff;
    transform: rotate(-45deg) translate(-6.2rem, -7rem);
    transform-origin: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 600;

    &.featured {
      transform: rotate(-45deg) translate(-6.2rem, -4.4rem);
      background-color: violet;
    }
  }

  .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  ${Button} {
    color: #333;
    border-color: #333;
    margin-bottom: 0;
    position: relative;
    z-index: 3;
    width: 30rem;
    height: 5rem;
    font-size: 1.8rem;
  }

  ${SCREEN.TL_DOWN} {
    .grid {
      grid-template-columns: repeat(auto-fill, 50%);
    }
  }

  ${SCREEN.TP_DOWN} {
    .grid {
      grid-template-columns: repeat(auto-fill, 100%);
    }
  }
`

const ProductsGrid = props => {
  //   console.log({ props })

  return (
    <ProductsGridComponent>
      <div className="l-layout">
        {props.title && (
          <h3
            className="main-title"
            onClick={e => {
              e.preventDefault()
              console.log({
                category: props.title,
                action: "clickTitle",
                label: "products-grid-title-click",
                value: 1,
              })
              trackCustomEvent({
                category: props.title,
                action: "clickTitle",
                label: "products-grid-title-click",
                value: 1,
              })
            }}
          >
            {props.title}
          </h3>
        )}
        <div className="grid">
          {props.items.map(({ node }, i) => {
            return (
              <div className="card" key={i}>
                <Link className="link" to={`/${node.slug}`} />
                <div className="inner">
                  {node.featured && (
                    <div className="mark featured">featured</div>
                  )}
                  {node.hotItem && <div className="mark hot">hot</div>}
                  <div className="image-holder">
                    <Img
                      className="image"
                      fluid={node.images[0].fluid}
                      alt={`Image Hero Banner`}
                    />
                  </div>
                  <h4 className="title">
                    <span>{node.title}</span>
                  </h4>
                  <p className="price">$ {node.price}</p>
                  {/* <Button>Add to cart</Button> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Button>find more</Button>
    </ProductsGridComponent>
  )
}

export default ProductsGrid
