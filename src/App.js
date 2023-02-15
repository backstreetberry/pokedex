import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDescription, getPokemonName, getPokemonType } from "./utils/utils";
import "./styles.css";
import Select from "./components/Select";
import Card from "./components/Card";


async function logdata() {
  const list = await getPokemonList();
  console.log(list);
}

// logdata();

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [pokemonType, setPokemonType] = useState("");


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const getPokemonData = async () => {
    const apidata = await getPokemonList();
    setPokemonList(apidata);
  }


  const pokemonNames = pokemonList.map((pokemon, idx) => {
    return <option key={idx} value={idx + 1}>{capitalizeFirstLetter(pokemon.name)}</option>
  });

  const onChange = async (e) => {
    setPokemonIndex(e.target.value);
  }

  const setName = async () => {
    let data = await getPokemonName(pokemonIndex);
    console.log(data);
    setPokemonName(data);
  }

  const setDesc = async () => {
    let data = await getPokemonDescription(pokemonIndex);
    setPokemonDescription(data);
  }

  const setType = async () => {
    let data = await getPokemonType(pokemonIndex);
    setPokemonType(data[0].type.name);

  }

  setName();
  setDesc();
  setType();

  useEffect(() => {
    getPokemonData();
  }, [])


  return (
    <>
      <div>
        <div className="container my-2">
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Pokedex</h1>
            {/* <img src="./icons8-pokedex-40.png" alt="Pokedex-Icon" /> */}
          </div>
        </div>
        <div className="pokedex">
          <Select onChange={async (e) => onChange(e)}>
            {pokemonNames}
          </Select>
          <Card pokemonIndex={pokemonIndex} pokemonName={pokemonName} pokemonDescription={pokemonDescription} pokemonType={pokemonType} />
        </div>
      </div>
    </>
  );
}

export default App;
