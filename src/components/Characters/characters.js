import React from 'react';
import Character from "../Character/character";
import character from "../Character/character";

const Characters = () => {

    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => console.log(data));

    return (
        <div>



        </div>
    );
};

export {Characters};