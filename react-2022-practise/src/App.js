import React from "react";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import Main from "./components/main/Main";
import { Navbar } from "./components/NavBar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Conditional from "./components/Conditional/Conditional";
import Conditional2 from "./components/Conditional/Conditional2";
import Conditional3 from "./components/Conditional/Conditional3";
import Table from "./components/table/Table";
import Cards from "./components/cards/Cards";
import ConditionalHandlingData from "./components/ConditionalHandling/ConditionalHandlingData";
import ConditionalClassBasedState from "./components/ConditionalHandling/ConditionalClassBasedState";
import Toggle from "./components/toggle/Toggle";
import LifeCycleOfReact from "./components/lifeCycle/LifeCycleOfReactMounting";
import UpdatingLifeCycle from "./components/lifeCycle/UpdatingLifeCycle";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <LifeCycleOfReact name={"Rushikesh"}></LifeCycleOfReact>
      <UpdatingLifeCycle></UpdatingLifeCycle>
      {/* <Navbar />
      <Carousel />
      <Toggle />
      <ConditionalHandlingData />
      <ConditionalClassBasedState />
      <Table />
      <Cards />
      <Conditional></Conditional>
      <Conditional2 />
      <Conditional3 />
      <Main /> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
