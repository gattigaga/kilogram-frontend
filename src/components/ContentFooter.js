import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { distanceInWordsToNow, format, isAfter, addDays } from "date-fns";
import "typeface-roboto";

import { splitBy3 } from "../helpers/formatter";

const Container = styled.div`
  background: white;
  padding: 0px 16px;
`;

const Caption = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #999;
  margin-top: 8px;
  margin-bottom: 0px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

const Timestamp = styled(Caption)`
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 0px;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }
`;

const ContentFooter = ({ totalComments, timestamp, onClick }) => {
  const hasMultipleComments = totalComments > 1;
  const isMoreThanAMonth = isAfter(new Date(), addDays(timestamp, 30));
  const date = isMoreThanAMonth
    ? format(timestamp, "MMM DD, YYYY")
    : distanceInWordsToNow(timestamp, {
        includeSeconds: true,
        addSuffix: true
      });

  return (
    <Container data-testid="container" onClick={onClick}>
      {!!totalComments && (
        <Caption>
          View {hasMultipleComments && "all"} {splitBy3(totalComments)} comment
          {hasMultipleComments && "s"}
        </Caption>
      )}
      <Timestamp data-testid="timestamp">{date}</Timestamp>
    </Container>
  );
};

ContentFooter.propTypes = {
  totalComments: PropTypes.number,
  timestamp: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func
};

ContentFooter.defaultProps = {
  totalComments: 0,
  timestamp: new Date()
};

export default ContentFooter;
