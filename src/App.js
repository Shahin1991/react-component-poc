import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import GridViewMaster from "./components/GridViewMaster";
import Slider from "./components/Slider";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  const slides=[
    {"heading":"heading1","body":"body1","backgroundImageUrl":"https://source.unsplash.com/RyRpq9SUwAU/1600x900"},
    {"heading":"heading2","body":"body2","backgroundImageUrl":"https://source.unsplash.com/BeOW_PJjA0w/1600x900"},
    {"heading":"heading3","body":"body3","backgroundImageUrl":"https://source.unsplash.com/TMOeGZw9NY4/1600x900"},
    {"heading":"heading4","body":"body4","backgroundImageUrl":"https://source.unsplash.com/yXpA_eCbtzI/1600x900"},
    {"heading":"heading5","body":"body5","backgroundImageUrl":"https://source.unsplash.com/ULmaQh9Gvbg/1600x900"}
  ]

  const slideOptions = {
    "autoslide":false,
    "autoslideInterval":5000,
    "rtl":false
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/gridview" component={GridViewMaster}></Route>
            <Route path="/slider" render={(props) => <Slider {...props} slides={slides} slideOptions={slideOptions} />}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
