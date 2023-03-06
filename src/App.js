import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Styling Components - 01</h1>
          <Welcome />
        </div>
        <div>
          <h1>Styling Components - 03</h1>
          <Welcome />
        </div>
      </div>
    );
  }
}
