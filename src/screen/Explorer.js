import React, { useContext } from "react";
import { ConvetionContext } from "../util/ConventionContext";

export default function Explorer() {
  const { text } = useContext(ConvetionContext);

  console.log(text);

  return (
    <div>
      <h1>Explore</h1>
     
    </div>
  );
}
