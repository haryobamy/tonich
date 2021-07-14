import React from "react";
import { HomepageHeader, Headerbar, WelcomeSlider, Blog } from "./components";

const App = () => {
  return (
    <>
      <div className="mx-4 my-3">
        <h1 className="blogHeader display-4 fst-italic">
          <strong>JESSIE</strong>
        </h1>
        <Headerbar />
        <HomepageHeader />
        <WelcomeSlider />
        <Blog />
      </div>
    </>
  );
};

export default App;
