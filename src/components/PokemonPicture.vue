<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<template>
  <div class="pokemon-container">
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon" />
    <img v-else class="hidden-pokemon" :src="imgSrc" alt="pokemon" />
  </div>
</template>

<style scoped>
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
