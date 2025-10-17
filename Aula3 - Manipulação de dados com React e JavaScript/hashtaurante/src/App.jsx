// rfce
import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards";

function App() {
  //Variável de estado
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  //Forma errada
  // numCategoriaSelecionada = 1
  //Forma correta
  // setNumCategoriaSelecionada(1)

  return (
    <div className="container">
      <Banner />

      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />

      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
