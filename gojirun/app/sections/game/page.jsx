import React from "react";
import Safari from "../../components/safari";
import Gojira from "../../components/gojira";

export default function Game() {
  return (
    <div>
      <h1>Gojirun 2024</h1>
      <div className="">
        <Gojira />
      </div>
      <div>
        <Safari />
      </div>
    </div>
  );
}
