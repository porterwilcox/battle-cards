<template>
<div>
<deck-select v-if="!game.id"/>
<game-over v-if="game.id" />
  </div>
</template>

<script>
import DeckSelect from '@/components/DeckSelect'
import GameOver from '@/components/GameOver'

export default {
  name: "battleCards",
  computed: {
    game(){
      return this.$store.state.game
    }
  },
  components: {
    DeckSelect,
    GameOver
  },
  methods: {

  }
};
</script>

<style>
body {
  margin: 0;
}
</style>

