import React, { Fragment, useCallback, useLayoutEffect, useState } from "react";

import TextComponent from "../../atoms/TextComponent";
import LiveSearchComponent from "../../molecules/LiveSearchComponent";

import { getSearchList } from "../../../services";

const MainComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState({});
  const [showLiveSearchComponent, setShowLiveSearchComponent] = useState(false);

  const defaultParam = "india";

  const fetchFilteredData = useCallback(async () => {
    const filteredData =
      userInput === ""
        ? await getSearchList(defaultParam)
        : await getSearchList(userInput);
    return (
      filteredData &&
      filteredData.data &&
      filteredData.data.data &&
      filteredData.data.data.r
    );
  }, [userInput]);

  useLayoutEffect(() => {
    if (showLiveSearchComponent) {
      fetchFilteredData().then((res) => setFilteredData(res));
    }
  }, [fetchFilteredData, showLiveSearchComponent]);

  return (
    <Fragment>
      <TextComponent
        selectedAirport={selectedAirport}
        onClick={() => setShowLiveSearchComponent(!showLiveSearchComponent)}
      />
      {showLiveSearchComponent && (
        <LiveSearchComponent
          handleInputChange={setUserInput}
          filteredData={filteredData}
          setSelectedAirport={setSelectedAirport}
          setShowLiveSearchComponent={setShowLiveSearchComponent}
        />
      )}
    </Fragment>
  );
};

export default MainComponent;
