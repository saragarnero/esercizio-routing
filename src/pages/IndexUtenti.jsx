import React from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../components/CardMaterial";
import { Grid } from "@mui/material";
import users from "../data/user.json";
import Layout from "../components/Layout";

function Index() {
  {
    /*<Link to="/about/123/ciao">pagina ciao</Link> |
        <Link to="/about{/*</345/Giorgia">pagina Giorgia</Link> |
        <Link to="/about/678/Sara"> pagina Sara</Link>|
        <Link to="/about/91011/Medhi">pagina Medhi</Link> */
  }
  return (
    <Layout>
    <Grid container spacing={2}>
      <h1>welcome to the index page!!</h1>
      {users.map((item) => {
        return (
          <Grid size={6}>
            <CardMaterial id={item.id} name={item.name} />
          </Grid>
        );
      })}
    </Grid>
    </Layout>
  );
}

export default Index;

