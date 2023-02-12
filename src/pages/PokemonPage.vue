<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions.js";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showing: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const index = Math.floor(4 * Math.random());
      this.pokemon = this.pokemonArr[index];
    },
    handleSelection(pokemon) {
      this.showing = true;
      if (pokemon.id === this.pokemon.id) {
        this.message = "Has acertado!";
      } else {
        this.message = `Has fallado ;(. La respuesta  era ${this.pokemon.name}`;
      }
    },
    handleNewGame() {
      this.pokemonArr = [];
      this.pokemon = null;
      this.showing = false;
      this.message = "";

      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<template>
  <div v-if="!pokemon">Cargando...</div>

  <div v-else class="container">
    <h1>¿¡Quién es ese Pokemón!?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showing" />
    <PokemonOptions :pokemons="pokemonArr" @selection="handleSelection" />

    <template v-if="showing">
      <h2>{{ message }}</h2>
      <button @click="handleNewGame">Nuevo juego</button>
    </template>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  gap: 1rem;
}
</style>
