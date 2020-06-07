import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
	font-size: 54px;
`;

export const Pokemon = styled.ul`
  display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 20px;
	padding-inline-start: 0;
`;

export const PokemonLi = styled.li`
  list-style: none;
	padding: 40px;
	color: #222;
	text-align: center;
	border-radius: 20px;
	position: relative;
`;

export const PokemonImg = styled.img`
  height: 180px;
	position: relative;
	z-index: 2;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
	margin-bottom: 0px;
	font-size: 32px;
	font-weight: normal;
	position: relative;
	z-index: 2;
`;