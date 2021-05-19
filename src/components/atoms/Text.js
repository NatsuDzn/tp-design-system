import React from "react";
import styled from "styled-components";
import font from "../../styles/font";

export const Text = ({ text, tag, color }) => {
  return <TextWrapper tag={tag} color={color}>{text}</TextWrapper>;
};

const TextWrapper = styled.span`
  font-family: ${font.family.base};
  font-size: ${(prop) => handleSize(prop.tag)};
  font-weight: ${(prop) =>
    prop.tag.startsWith("h") ? font.weight.bold : font.weight.regular};
  text-transform: ${(prop) => (prop.tag === "small" ? "uppercase" : "normal")};
  color: ${(prop) => prop.color};
`;

function handleSize(tag) {
  switch (tag) {
    case "h1":
      return `${font.size.xl}px`;
    case "h2":
      return `${font.size.l}px`;
    case "h3":
      return `${font.size.m}px`;
    case "h4":
      return `${font.size.s}px`;
    case "p":
      return `${font.size.text}px`;
    case "small":
      return `${font.size.mentions}px`;
    default:
      return `${font.size.text}px`;
  }
}

export default Text;
