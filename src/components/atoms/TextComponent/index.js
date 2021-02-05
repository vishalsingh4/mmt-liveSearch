import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #000000;
  width: 20rem;
  margin: 1rem;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background: #87ceeb;
  }
`;

const TextComponent = ({ selectedAirport = {}, onClick = () => {} }) => {
  const {
    cn = "Delhi",
    iata = "DEL",
    n = "Delhi Airport",
  } = selectedAirport;
  return (
    <TextWrapper
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <div> FROM </div>
      <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{cn}</div>
      <div>
        {iata}
        {","}
        {n}
      </div>
    </TextWrapper>
  );
};

TextComponent.propTypes = {
  selectedAirport: PropTypes.object,
  onClick: PropTypes.func,
};

export default TextComponent;
