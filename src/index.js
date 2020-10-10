import React from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux';
import store from './store';
import "normalize.css";
import "./styles.scss";
import HorizontalList from "./components/HorizontalList";
import myImage from "./static/img/M0003891_Fox.jpg";

const myImages = [];
for (let i = 0; i < 45; i++) {
  myImages[i] = myImage;
}
const App = () => {
  return (
    <Provider store={store}>
    <div className="container">
      <HorizontalList>
          {myImages.map((image, i) => {
            return (
              <div className="item" key={i}>
                <img src={image} />
              </div>
            );
          })}
      </HorizontalList>
    </div>
    </Provider>
  );
}

render(<App />, document.querySelector("#container"));
