import React, { Fragment, useMemo } from "react";

import HeaderComponent from "./components/atoms/HeaderComponent";
import MainComponent from "./components/organisms/MainComponent";

import "./App.css";

function App() {
  const NewHeaderComponent = useMemo(() => <HeaderComponent />, []);

  return (
    <Fragment>
      {NewHeaderComponent}
      <MainComponent />
    </Fragment>
  );
}

export default App;
