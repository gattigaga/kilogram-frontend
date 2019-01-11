import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 1px solid #bbb;
  border-radius: 100%;
  box-sizing: border-box;
  object-fit: cover;
`;

const Avatar = ({ className, src, alt, size, to }) => (
  <Link to={to}>
    <Image className={className} src={src} alt={alt} size={size} />
  </Link>
);

Avatar.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string
};

Avatar.defaultProps = {
  to: "#",
  size: "32px"
};

export default Avatar;
