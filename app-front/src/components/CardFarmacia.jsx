import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardFarmacia(props) {
  return (
    <Card
      style={{
        width: "11rem",
        background: "#F3F2F2",
        borderRadius: "30px",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
        margin: "1rem",
        textAlign: "center",
        height: "12rem",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imagem}
        style={{ width: "70px", height: "64" }}
      />
      <Card.Body>
        <Card.Title
          style={{
            color: "var(--third-color)",
            fontSize: "1rem",
            borderBottom: "1px solid var(--third-color)",
            paddingBottom: "0.5rem",
          }}
        >
          {props.nome}
        </Card.Title>
        <Button
          variant="primary"
          style={{
            background: "var(--third-color)",
            border: "none",
            width: "80%",
            height: "1.5rem",
            position: "absolute",
            bottom: "15px",
            left: "20px",
            textAlign: "center",
            fontSize: "0.7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Ver mais
        </Button>
      </Card.Body>
    </Card>
  );
}
