import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "typeface-roboto";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
`;

const Label = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  color: black;
  margin: 0px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;

const Button = ({ label, to }) => (
  <StyledLink to={to}>
    <Container>
      <Label>{label}</Label>
    </Container>
  </StyledLink>
);

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string
};

export default Button;
