import React from "react";
import { Container } from "@mui/material";

function Layout(props) {
  return (
    <div
      style={{
        backgroundColor: "#1468b6",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "100px",
          backgroundColor: "#d42993",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          style={{ height: "100px" }}
          src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"
          alt="Header"
        />
      </div>

      {/* Contenuto principale (si espande per occupare lo spazio) */}
      <div style={{ flex: 1, padding: "20px", boxSizing: "border-box" }}>
        <Container
          maxWidth={false}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {props.children}
        </Container>
      </div>

      {/* Footer normale (non fisso) */}
      <div
        style={{
          height: "100px",
          backgroundColor: "#d42993",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      ></div>
    </div>
  );
}

export default Layout;

