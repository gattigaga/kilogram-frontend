import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "typeface-roboto";

import { splitBy3 } from "../helpers/formatter";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Label = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  color: #aaa;
  margin: 0px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;
const Value = styled(Label)`
  color: black;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: bold;
`;

const Stat = ({ label, value, to }) => {
  const main = (
    <div>
      <Value>{splitBy3(value)}</Value>
      <Label>{label}</Label>
    </div>
  );

  return to ? <StyledLink to={to}>{main}</StyledLink> : main;
};

Stat.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
};

export default Stat;
