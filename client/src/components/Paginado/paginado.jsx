import React from "react";

export default function Paginado ({pokesPerPage, pokemons, paginado}){
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(pokemons/pokesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                { pageNumbers && pageNumbers.map(number => (
                <li className="number">
                    <a onClick={() => paginado(number)}> {number}</a> 
                </li>
                ))}
            </ul>
        </nav>
    )
}