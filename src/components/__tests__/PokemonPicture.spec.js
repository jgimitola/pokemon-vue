import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe("PokemonPicture", () => {
  test("Match snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 1, showPokemon: false },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Show hidden image with pokemon id = 100", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: false },
    });

    const imgs = wrapper.findAll("img");

    expect(imgs.length).toBe(1);
    expect(imgs[0].classes("hidden-pokemon")).toBe(true);
  });

  test("Show answer image", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: true },
    });

    const imgs = wrapper.findAll("img");

    expect(imgs.length).toBe(1);
    expect(imgs[0].classes("hidden-pokemon")).toBe(false);
    expect(imgs[0].classes("fade-in")).toBe(true);
    expect(imgs[0].attributes("src")).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${100}.svg`
    );
  });
});
