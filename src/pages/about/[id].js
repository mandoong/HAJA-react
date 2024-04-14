import { useState } from "react";
import { useParams } from "react-router-dom";

export default function AboutId() {
  const { id } = useParams();

  return (
    <>
      <div>About page</div>
      <div>{id}</div>
    </>
  );
}
