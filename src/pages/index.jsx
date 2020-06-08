import React, {useState, useEffect} from 'react';
import axios from 'axios';

import GlobalStyle from '../styles/global'
import { Title, Container, Pokemon, PokemonLi, PokemonImg, PokemonName } from './styles'

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonsArray = []

      for (let i = 1; i <= 150; i++) {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        pokemonsArray.push(data)
      }
      setPokemons(pokemonsArray)
    }
    fetchPokemons()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>POKEDEX WITH NEXTJS</Title>
        <Pokemon>
          {pokemons.map((pokemon, index) => (
            <PokemonLi key={index}>
              <PokemonImg alt={pokemon.name} src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}></PokemonImg>
              <PokemonName>{pokemon.id}.{pokemon.name}</PokemonName>
            </PokemonLi>
          ))}
        </Pokemon>
      </Container>
    </>
  )
}
