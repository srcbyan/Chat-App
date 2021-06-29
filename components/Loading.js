import React from "react";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "80vh" }}>
      <div>
        <img
          src="https://i.pinimg.com/originals/98/c5/d8/98c5d85f82ff7d367387457ede631f9a.png"
          alt="ChatSkoot"
          height={200}
          style={{ marginBottom: 20}}
        />
        <Circle color="#000" size={50} />
      </div>
    </center>
  );
}

export default Loading;
