import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 2px;

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentGrid = ({ items, onClickItem }) => (
  <Container>
    {items.map(item => (
      <Item
        key={item.id}
        onClick={() => onClickItem(item.id)}
        data-testid="item"
      >
        <Image src={item.image} />
      </Item>
    ))}
  </Container>
);

ContentGrid.propTypes = {
  items: PropTypes.array,
  onClickItem: PropTypes.func
};

export default ContentGrid;
