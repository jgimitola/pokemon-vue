import { shallowMount } from "@vue/test-utils";
import { describe, expect, test, vitest } from "vitest";

import { pokemons } from "@/helpers/__tests__/mocks/pokemons.mock.js";
import PokemonPage from "@/pages/PokemonPage.vue";

describe("PokemonPage", () => {
  test("call mixPokemonArray on mount", () => {
    const mixPokemonArraySpy = vitest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    );
    shallowMount(PokemonPage);

    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("match with snapshot", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showing: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("children custom components should exist", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showing: false,
          message: "",
        };
      },
    });

    const picture = wrapper.find("pokemon-picture-stub ");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(picture.attributes("pokemonid")).toBe(`${pokemons[0].id}`);

    expect(options.exists()).toBeTruthy();
    expect(options.attributes("pokemons")).toBeDefined();
  });

  test("handleSelection works", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showing: false,
          message: "",
        };
      },
    });

    await wrapper.vm.handleSelection(pokemons[0]);

    expect(wrapper.vm.message).toBe("Has acertado!");

    const messageElement = wrapper.find("h2");

    expect(messageElement.text()).toBe("Has acertado!");
  });
});
