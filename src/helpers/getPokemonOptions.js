import pokemonApi from "@/api/pokemonApi.js";

const getPokemons = () => Array.from(Array(650), (_, index) => index + 1);

const shufflePokemons = (ids) => [...ids].sort(() => Math.random() - 0.5);

const slicePokemons = (ids) => ids.slice(0, 4);

const getPokemonsNames = async (ids) => {
  if (ids.length > 4) return [];

  const responses = await Promise.all(
    ids.map((id) => pokemonApi.get(`/${id}`))
  );

  return responses.map((response) => ({
    id: response.data.id,
    name: response.data.name,
  }));
};

const getPokemonOptions = async () => {
  const allIds = getPokemons();
  const mixedPokemons = shufflePokemons(allIds);
  const slicedPokemons = slicePokemons(mixedPokemons);

  const names = await getPokemonsNames(slicedPokemons);

  return names;
};

export default getPokemonOptions;
