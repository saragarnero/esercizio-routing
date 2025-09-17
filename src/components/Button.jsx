import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

function ButtonPokemon(props) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    caricaPokemon();
  }, [props]);

  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + props.id
    );
    const dati = await risultato.json();
    console.log(dati);
    setPokemon(dati);
  }

  return (
    <div>
      <Button onClick={props.onClick}>{pokemon?.name}</Button>
    </div>
  );
}

export default ButtonPokemon;
