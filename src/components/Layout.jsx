import React from "react";
import { colors, Container } from "@mui/material";

function Layout(props) {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "#1468b6",
        padding: 0,
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          height: "100px",
          backgroundColor: "#d42993",
        }}
      >
        <img
          style={{
            height: "100px",
          }}
          src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"
        ></img>
      </div>
      {props.children}
      <div
        style={{
          height: "100px",
          backgroundColor: "#d42993",
          position:"fixed",
          bottom:0,
          right:0,
          left:0,
        }}
      ></div>
    </Container>
  );
}

export default Layout;
