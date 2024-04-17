import React from "react";
import { Button } from "react-bootstrap";
export default function ButtonNav(props) {
  return (
    <Button variant="light" onClick={props.onClick} className="button-nav">
      {props.children}
    </Button>
  );
}
