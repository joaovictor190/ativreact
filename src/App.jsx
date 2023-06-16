import React {useState} from 'react';
import "./App.css";
import Musicas from "./musicas"

function App() {
  const {lista,setLista} = React.useState([
    { artista "Drake",titulo: "Im my feelings"}
    { artista "Veigh",titulo: "Novo balanço"}
    { artista "The weeknd",titulo: "Out of time"}
    { artista "MAGIC!",titulo: "No way No"}
});
    const resultados = [];

    for (const musica of lista) {
      resultados.push(<musica key={Musicas.id} artista={Musicas.artistas}
        titulo={musica.titulo} />);
        
    }

    const adicionar = () => {
      const novo = { id 5, artistas: "Adele", titulo: "Set fire to the rain"};
      setLista([novo, ...lista]);

    };

    return (
      <>
         <h1>Playlist</h1>
         <button onClick={() => adicionar()}>Novo</button> 
         {resultados}  
      
      </>
    );
  }

  function quadrado(x) {
    return x =  x;
  }
const quad = (x) => x * x

export default App;
