<template>
<div>
    <div class="opponent">
        <div class="opponent-hand">
            <div
            v-for="card in game.players[1].hand"
            :key="card.id"
            ><img 
            v-if="!card.visible"
            src="@/assets/monster-hunt-card-back.png"
            class="hidden"
            ><img
            v-else-if="card.visible"
            :src="card.img"
            class="visible"
            ></div>
        </div>
        <h1>{{game.players[1].name}}</h1>
    </div>
    <div class="hero">
        <h1>{{game.players[0].name}}</h1>
        <div class="hero-hand">
            <div
            v-for="card in game.players[0].hand"
            :key="card.id"
            ><img
            v-if="!game.players[0].remainingCards == 0"
            :src="card.img"
            class="hero-card"
            ></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Game",
  computed: {
    game() {
      return this.$store.state.aGame;
    }
  }
};
</script>

<style scoped>
.opponent-hand {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  max-height: 30vh;
}
.hidden {
  margin: 0 -3px;
  height: 30vh;
  width: 20vh;
}
.hidden:hover {
  position: relative;
  animation: slideDown 0.5s forwards;
}
@keyframes slideDown {
  from {
    top: 0px;
  }
  to {
    top: 7vh;
  }
}
.visible {
  height: 27.5vh;
  width: 18vh;
  margin: 0 5px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(207, 205, 205);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.623);
}
.visible:hover {
  position: relative;
  animation: grow 0.5s forwards, slideDown 0.5s forwards;
  z-index: 2;
}
@keyframes grow {
  to {
    height: 50vh;
    width: 33vh;
  }
}
.opponent h1 {
  position: absolute;
  text-align: center;
  width: 100vw;
  max-width: 99%;
}
.hero h1 {
  position: absolute;
  text-align: center;
  width: 100vw;
  max-width: 99%;
  bottom: 30vh;
}
.hero-hand {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  max-height: 30vh;
  position: absolute;
  bottom: 0vh;
  margin: 0 auto;
  width: 100vw;
  max-width: 99%;
}
.hero-card {
  height: 27.5vh;
  width: 18vh;
  margin: 0 5px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(207, 205, 205);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.623);
}
.hero-card:hover {
    position: relative;
    animation: slideUp .5s forwards, grow .5s forwards;
}
@keyframes slideUp {
    from {
        bottom: 0vh;
    }
    to {
        bottom: 7vh;
    }
}
</style>
