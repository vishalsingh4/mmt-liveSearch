import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LiveSearchWrapper = styled.div`
  padding: 1rem;
  width: 20rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  position: absolute;
  top: 17%;
  left: 30%;
  background: #e5e5e5;
  max-height: 36rem;
  overflow-y: auto;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  padding: 1rem 0;
  cursor: pointer;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LiveSearchComponent = ({
  handleInputChange = () => {},
  filteredData = [],
  setSelectedAirport = () => {},
  setShowLiveSearchComponent = () => {},
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    handleInputChange(e.target.value);
  };

  return (
    <LiveSearchWrapper>
      <input
        type="text"
        placeholder="Search here...."
        style={{ width: "100%", height: "2rem" }}
        onChange={(e) => handleChange(e)}
      />
      {filteredData &&
        filteredData.map((item) => {
          const {
            _id,
            iata = "",
            n = "",
            xtr: { cnt_n = "", cn = "" } = {},
          } = item;
          return (
            <ListWrapper
              key={_id}
              onClick={() => {
                setSelectedAirport({ cn, iata, n });
                handleInputChange("");
                setShowLiveSearchComponent(false);
              }}
            >
              <DetailWrapper>
                <div>
                  {cn}
                  {","}
                  {cnt_n}
                </div>
                <div>{n}</div>
              </DetailWrapper>
              <div>{iata}</div>
            </ListWrapper>
          );
        })}
    </LiveSearchWrapper>
  );
};

LiveSearchComponent.propTypes = {
  handleInputChange: PropTypes.func,
  filteredData: PropTypes.array,
  setSelectedAirport: PropTypes.func,
  setShowLiveSearchComponent: PropTypes.func,
};

export default LiveSearchComponent;
