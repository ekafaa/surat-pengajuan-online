import React from "react";
import { Card } from "react-bootstrap";

function CardComp(props) {
  return (
    <Card
      style={{
        boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17",
      }}
      className="mt-4 p-4 rounded-2"
    >
      {props.children}
    </Card>
  );
}

export default CardComp;
