<template>
<DeckSelect v-if="!activeGame.id"/>
<Game v-else />
</template>

<script>
import DeckSelect from '@/components/DeckSelect'
import Game from '@/components/Game'

export default {
  name: "battleCards",
  computed: {
    activeGame(){
      return this.$store.state.aGame
    }
  },
  components: {
    DeckSelect,
    Game
  },
  methods: {

  }
};
</script>

<style>

</style>

