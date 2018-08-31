<template>
    <div class="game-over">
        <div v-if="game.winner.id == game.players[0].id">
            <h1>nice you won</h1>
            <button @click="playAgain(game.id)">replay</button>
        </div>
        <div v-else-if="game.winner.id">
            <h1>you have fallen</h1>
            <button @click="playAgain(game.id)">replay</button>
        </div>
        <div v-else>
            <h1>you stood your ground well, <br>
            but so did your opponent...<br>
            TIE!</h1>
            <button @click="playAgain(game.id)">replay</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "GameOver",
  computed: {
    game() {
      return this.$store.state.game;
    }
  },
  methods: {
    playAgain(gameId) {
      this.$store.dispatch("quit", gameId);
    }
  }
};
</script>

<style scoped>
.game-over {
  background-color: #1a1a1d;
  height: 100vh;
  width: 100vw;
  position: fixed;
  color: #c3073f;
  text-shadow: 0 0 2px #4e4e50;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
}
button {
  margin-top: 10vh;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  width: auto;
  box-shadow: 0 0 30px 10px #c3073f;
  border-radius: 50%;
  height: 10vh;
  width: 10vh;
  color: #4e4e50;
}
button:hover {
  animation: glow 2.75s infinite;
}
@keyframes glow {
  0% {
    box-shadow: 0 0 30px 10px #c3073f;
  }
  50% {
    box-shadow: 0 0 50px 25px #c3073f;
  }
  100% {
    box-shadow: 0 0 30px 10px #c3073f;
  }
}
</style>
