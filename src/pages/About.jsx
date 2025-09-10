import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function About(props) {
  const params = useParams();
  const [pokemon,setPokemon] = useState();

  useEffect(() => {
    caricaPokemon() 
  }, [params]);

  async function caricaPokemon() {
    const risultato = await fetch("https://pokeapi.co/api/v2/pokemon/" + params.id);
    const dati = await risultato.json();
    console.log(dati);
    setPokemon(dati);
  }
    

  return (
    <div>
      <h1>
        welcome to the About page: ID --{params.id} <br />
        <br />
        nome:{pokemon?.name}
        {pokemon?.types.map((item,index)=>{})}
        <br/>
        altezza:{pokemon?.height}
        <br/>
        larghezza:{pokemon?.weight}    
      </h1>
      <Button variant="contained">Clicca qui</Button>
    </div>
  );
}

export default About;
