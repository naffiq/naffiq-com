import React from "react";
import MainHeader from "./partials/MainHeader";

export default ({ children }) => (
  <section id="app-layout">
    <MainHeader />
    {children}
  </section>
);
