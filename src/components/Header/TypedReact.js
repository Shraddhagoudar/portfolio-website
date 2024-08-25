import React, { Component } from "react";
import Typed from "react-typed";

export class TypedReact extends Component {
  render() {
    return (
      <div>
        <Typed
          strings={["Shraddha V Goudar"]}
          style={{ fontSize: "2.5rem", fontWeight: "500" }}
          typeSpeed={40}
        />
        <br />
        <Typed
          strings={["HTML", "CSS", "JavaScript", "React", "Springboot", "Java"]}
          typeSpeed={40}
          backSpeed={50}
          className="text-light"
          style={{ fontWeight: "500" }}
          loop
        ></Typed>
      </div>
    );
  }
}
