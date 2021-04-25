import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  border: 2px solid #fff;
  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  opacity: 0.9;
  transition-duration: 200ms;
  cursor: pointer;
  margin: 20px auto;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;
