import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Exercise() {
  //const[esercizi,setEsercizi]=useState(2);
  //const[eserciziInput,setEserciziInput]= useState(0);
  const [input, setInput] = useState();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    console.log(lista);
  }, [lista]);

  return (
    <Layout>
      <div>
        <h1>welcome to the Exercise page!!</h1>
        <input
          value={input}
          onChange={(input) => setInput(input.target.value)}
        ></input>
        <button
          onClick={() => {
            setLista([...lista, input]);
            setInput("");
          }}
        >
          aggiungi
        </button>
        <h1>Lista della spesa:</h1>
        <ul>
          {lista.map(item =>  
          <li>{item}</li>)}, 
        </ul>
      </div>
    </Layout>
  );
}

export default Exercise;
