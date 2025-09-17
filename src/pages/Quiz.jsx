import React, { useEffect } from "react";
import Index from "./Index";
import { useState } from "react";
import Button from "../components/Button";

function Quiz() {
  const [pokemonId, setPokemonId] = useState([]);
  const[putenggio,setPunteggio]= useState(0);

  function generaNumeri() {
    let ArrayId = [];

    for (let i = 0; i < 4; i++) ArrayId.push(Math.round(Math.random() * 151));
    setPokemonId(ArrayId);
    console.log(ArrayId);
  }

  useEffect(() => {
    generaNumeri();
  }, [putenggio]);
 function controllaRisposta(id){
    if (pokemonId[2]===id){
        setPunteggio(putenggio+1);
    }
 }
  return (
    <>
      <h1>La pagina dei quiz</h1>
      <p>il tuo punteggio {putenggio}</p>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ pokemonId[2]+".png"}/>
      {pokemonId.map((item) => {
        return <Button id={item}onClick={()=>controllaRisposta(item)}></Button>;
      })}
    </>
  );
}

export default Quiz;
