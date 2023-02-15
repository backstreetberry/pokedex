import React from 'react'
import { getPokemonSpriteUrl } from '../utils/utils';


function Card(props) {
    let { pokemonIndex, pokemonDescription, pokemonName, pokemonType } = props;
    console.log(pokemonType);
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#f2e785',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
        ice: '#d0eaf5',
        ghost: '#8876b5'
    };


    return (
        <>
            <div className='container my-3' style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                maxWidth: "450px", minWidth: "200px", height: "600px", padding: "0px"
            }}>
                <div className="card" style={{ borderRadius: "30px", backgroundColor: colors[pokemonType], height: "500px", marginTop: "-100px"}}>
                    <div className="container" style={{ width: "300px", height: "300px", margin: "20px auto"}}>
                        <img src={getPokemonSpriteUrl(pokemonIndex)} className="card-img-top" alt="..."  />
                    </div>
                    <div className="card-body" style={{ marginTop: "-15px", paddingTop: "0px" }}>
                        <h5 className="card-title" style={{ textAlign: "center", fontSize: "30px" }}>{pokemonName}</h5>
                        <h6 className="card-title" style={{ textAlign: "center", fontSize: "20px", fontWeight: "normal" }}>Type: {pokemonType}</h6>
                        <p className="card-text" style={{ textAlign: "center" }}>{pokemonDescription}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card;