import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../components/CardMaterial";
import { Grid } from "@mui/material";
import users from "../data/user.json";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Quiz from "./Quiz";

function SearchPages() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(40);
  const [cercaPokemon, setCercaPokemon] = useState();
  const[ricerca,setricerca]=useState(false);

  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + cercaPokemon
    );
    const dati = await risultato?.json();
    setPokemon(dati);
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <h1>welcome to the Search page!!</h1>

        {/*<input type="number" onChange={(e) => setLimit(e.target.value)} />
        <Button variant="contained" onClick={() => caricaPokemon()}>
          pokemon
        </Button> 
        {pokemon.map((item, index) => {
          console.log(item.pokemon.url);
          let parola = item.pokemon.url.split("/");
          console.log(parola);*/}

        {!!pokemon.id ?(
          <Grid size={6}>
            <CardMaterial
              id={pokemon?.id}
              name={pokemon?.name}
              image={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                pokemon?.id +
                ".png"
              }
            />
          </Grid>
        ): (pokemon.length>0 && ricerca ?<h1>il pokemon non esiste</h1> : <h1>Riprova</h1>)}
      </Grid>
      <input type="text" onChange={(e) => {setCercaPokemon(e.target.value);
        setricerca(false);
      }} />
      <Button variant="contained" onClick={() => {caricaPokemon()
        setricerca(true)
      }}>
        cerca pokemon
      </Button>
    </Layout>
  );
}

export default SearchPages;
