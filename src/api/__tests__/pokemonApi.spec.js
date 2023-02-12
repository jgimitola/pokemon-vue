import { describe, expect, test } from "vitest";

import pokemonApi from "@/api/pokemonApi.js";

describe("pokemonApi", () => {
  test("have configured api url", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
