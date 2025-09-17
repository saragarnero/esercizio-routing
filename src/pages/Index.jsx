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

function Index() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(40);
  const [diversiPokemon, setDiversiPokemon] = useState([]);
  const [tipo, setTipo] = useState();

  useEffect(() => {
    caricaTipi();
    // caricaPokemon();
  }, []);

  useEffect(() => {
    if (!!tipo) cercaPokemon();
  }, [tipo]);

  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit= " + limit
    );
    const dati = await risultato.json();
    setPokemon(dati.results);
  }

  async function caricaTipi() {
    const risultato = await fetch("https://pokeapi.co/api/v2/type");
    const dati = await risultato.json();
    setDiversiPokemon(dati.results);
  }

  async function cercaPokemon() {
    const risultato = await fetch("https://pokeapi.co/api/v2/type/" + tipo);
    const dati = await risultato.json();
    //   console.log(dati);
    setPokemon(dati.pokemon);
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <h1>welcome to the index page!!</h1>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipo}
          label="pokemon"
          onChange={(item) => setTipo(item.target.value)}
        >
          {diversiPokemon.map((item, index) => {
            return <MenuItem value={item.name}>{item.name}</MenuItem>;
          })}
        </Select>
        {/*<input type="number" onChange={(e) => setLimit(e.target.value)} />
        <Button variant="contained" onClick={() => caricaPokemon()}>
          pokemon
        </Button> */}
        {pokemon.map((item, index) => {
          console.log(item.pokemon.url);
          let parola = item.pokemon.url.split("/");
          console.log(parola);

          return (
            <Grid size={6}>
              <CardMaterial
                id={parola[parola.length - 2]}
                name={item.name || item?.pokemon?.name}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  parola[parola.length - 2] +
                  ".png"
                }
              />
            </Grid>
          );
        })}
      </Grid>
      <Button variant="contained" onClick={() => setLimit(limit + 20)}>
        carica altri pokemon
      </Button>
    </Layout>
  );
}

export default Index;
