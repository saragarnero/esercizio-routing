import React, { useEffect } from "react";
import Index from "./Index";
import { useState } from "react";
import Button from "../components/Button";
import Alert from '@mui/material/Alert';

function Quiz() {
  const [pokemonId, setPokemonId] = useState([]);
  const[punteggio,setPunteggio]= useState(0);
  const[alertype,setAlerType]= useState(0);

  function generaNumeri() {
    let ArrayId = [];

    for (let i = 0; i < 4; i++) ArrayId.push(Math.round(Math.random() * 151));
    setPokemonId(ArrayId);
    console.log(ArrayId);
  }

  useEffect(() => {
    generaNumeri();
  }, [punteggio]);

 function controllaRisposta(id){
    if (punteggio===id){
        setPunteggio(punteggio+1);
    }
    else
    setPunteggio(punteggio-2);
  
 }
  return (
    <>
      <h1>La pagina dei quiz</h1>
      <p>il tuo punteggio {punteggio}</p>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ pokemonId[2]+".png"}/>
      {pokemonId.map((item) => {
        return <Button id={item}onClick={()=>controllaRisposta(item)}></Button>;
      })}

      <Alert severity="success">Bravo,hai fatto tutto  giusto!!! </Alert>
      <Alert severity="error">Hai sbagliato!!</Alert>
    </>
  );
}

export default Quiz;
