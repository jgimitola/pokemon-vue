import { shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, test } from "vitest";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemons } from "@/helpers/__tests__/mocks/pokemons.mock.js";

describe("PokemonOptions", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("Match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Show options", () => {
    const items = wrapper.findAll("li");

    expect(items.length).toBe(4);

    const itemDisplayingNames = items.map((item) => item.text());
    const pokemonNames = pokemons.map((item) => item.name);

    expect(itemDisplayingNames).toStrictEqual(pokemonNames);
  });

  test("emit @selection", () => {
    const bulbasaurItem = wrapper.find("li");

    bulbasaurItem.trigger("click");

    expect(wrapper.emitted("selection").length).toBe(1);
    expect(wrapper.emitted("selection")[0]).toStrictEqual([pokemons[0]]);
  });
});
