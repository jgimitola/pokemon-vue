import { describe, expect, test } from "vitest";

import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from "@/helpers/getPokemonOptions.js";
import { pokemons } from "./mocks/pokemons.mock";

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

    expect(names).toStrictEqual(pokemons);
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
