import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterComponent = styled.footer`
  width: 100%;
  background: rgb(51, 51, 51);
  li {
  }
  ul {
    display: flex;
    justify-content: center;
  }
  .link {
    display: block;
    margin: 1rem;
    padding: 1rem;
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
  }

  .rights {
    color: #fff;
    text-align: center;
    padding: 2rem 0;
  }
`

class Footer extends Component {
  render() {
    return (
      <FooterComponent>
        <div className="footer_inner">
          <div>
            <div>
              <section>
                <div>
                  <ul>
                    <li>
                      <Link className="link" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/store">
                        Store
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/contact-us">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/copyright">
                        Copyright
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="rights">©2021 SEO Sarter. All rights reserved.</div>
          </div>
        </div>
      </FooterComponent>
    )
  }
}

export default Footer
