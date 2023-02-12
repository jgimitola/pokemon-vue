import { describe, expect, test } from "vitest";

import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from "@/helpers/getPokemonOptions.js";

describe("getPokemonOptions", () => {
  test("Return correct index array", () => {
    const pokemons = getPokemons();

    expect(pokemons.length).toBe(650);

    expect(pokemons[0]).toBe(1);
    expect(pokemons[129]).toBe(130);
    expect(pokemons[259]).toBe(260);
    expect(pokemons[389]).toBe(390);
    expect(pokemons[649]).toBe(650);
  });

  test("Return 4 element array", async () => {
    const names = await getPokemonsNames([1, 2, 3, 4]);

    expect(names).toStrictEqual([
      { id: 1, name: "bulbasaur" },
      { id: 2, name: "ivysaur" },
      { id: 3, name: "venusaur" },
      { id: 4, name: "charmander" },
    ]);
  });

  test("getPokemonOptions should return a shuffled array", async () => {
    const pokemons = await getPokemonOptions([1, 2, 3, 4]);

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
    ]);
  });
});
