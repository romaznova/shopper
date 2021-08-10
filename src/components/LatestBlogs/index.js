import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { SCREEN } from "../../styles"

const LatesBlogsComponent = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .card {
    position: relative;
    background: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.8);
  }

  .image {
    width: 100%;
    &::after {
      display: block;
      content: "";
      width: 100%;
      padding-bottom: 56.5%;
    }
  }

  .title {
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem;
  }

  .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  ${SCREEN.TP_DOWN} {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

const LatestBlogs = props => {
  return (
    <LatesBlogsComponent>
      <div className="l-layout">
        <h3 className="main-title">Latest blogs</h3>
        <div className="grid">
          {props.items.map(({ node }, i) => (
            <div className="card" key={i}>
              <Img
                className="image"
                fluid={node.image.fluid}
                alt={`Image Hero Banner`}
              />
              <Link className="link" to={`/${node.slug}`} />
              <h4 className="title">{node.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </LatesBlogsComponent>
    
  )
}

export default LatestBlogs
