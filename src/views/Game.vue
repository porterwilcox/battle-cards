<template>
<div v-if="game.id" class="game">
<div v-if='game.winner'>{{gameEnd}}</div>
  <h2 class="enemy-count">enemies remaining: {{game.players[1].remainingCards + game.players[1].hand.length}}</h2>
  <button @click="quit(game.id)">quit</button>
  <div class="opponent">
      <div class="opponent-hand">
          <div
          v-for="card in game.players[1].hand"
          @click="setOpponent(card)"
          :key="card.id"
          ><img 
          v-if="!card.visible"
          src="@/assets/monster-hunt-card-back.png"
          class="hidden"
          >
          <div class="opp-card"
          v-else-if="card.visible"
          ><img
          :src="card.img"
          ><span class="defense">{{card.defense}}</span>
          <i class="fas fa-shield-alt shield"></i>
          <span class="attack">{{card.attack}}</span>
          <span class="health">{{card.health}}</span>
          <span class="swords">&#9876;</span>
          <i class="fas fa-heart heart"></i>
          </div>
      </div>
    </div>
    <h1>{{game.players[1].name}}</h1>
    <h2 v-if="opponent">{{opponent.name}}</h2>
  </div>
  <opponent id="the-opp"/>
  <button class="fight"
  @click='fight({
      "playerId": game.players[0].id,
      "opponentId": game.players[1].id,
      "playerCardId": hero.id,
      "opponentCardId": opponent.id,
      gameId: game.id,
    })' 
  v-if="hero && opponent"
  >
  <img alt="Vue logo" src="../assets/logo.png">
  </button>
  <hero id="the-hero" />
  <h2 class="hero-count">heroes remaining: {{game.players[0].remainingCards + game.players[0].hand.length}}</h2>
  <div class="hero">
      <h2 v-if="hero">{{hero.name}}</h2>
      <h1>{{game.players[0].name}}</h1>
      <div class="hero-hand">
          <div
          class="hero-card"
          v-for="card in game.players[0].hand"
          @click="setHero(card)"
          :key="card.id"
          ><span class="defense">{{card.defense}}</span>
          <i class="fas fa-shield-alt shield"></i>
          <span class="attack">{{card.attack}}</span>
          <span class="health">{{card.health}}</span>
          <span class="swords">&#9876;</span>
          <i class="fas fa-heart heart"></i>
          <img
          :src="card.img"
          ></div>
      </div>
  </div>
</div>
</template>

<script>
import Hero from "@/components/Hero";
import Opponent from "@/components/Opponent";
export default {
  name: "Game",
  computed: {
    game() {
      return this.$store.state.game;
    },
    hero() {
      return this.$store.state.hero;
    },
    opponent() {
      return this.$store.state.opponent;
    },
    gameEnd() {
        this.$router.push({ name: "battleCards" });
    }
  },
  mounted() {
    if (!this.game.id) {
      this.$store.dispatch("getGame", this.$route.params.gameId);
    }
  },
  methods: {
    setHero(card) {
      this.$store.dispatch("setHero", card);
    },
    setOpponent(card) {
      this.$store.dispatch("setOpponent", card);
    },
    fight(payload) {
      document.getElementById("the-hero").classList.add("hero-rush");
      document.getElementById("the-opp").classList.add("opp-rush");
      let putFight = setTimeout(
        () => this.$store.dispatch("fight", payload),
        1000
      );
      let wait = setTimeout(() => {
        document.getElementById("the-hero").classList.remove("hero-rush");
      }, 1000);
      let waitAgain = setTimeout(() => {
        document.getElementById("the-opp").classList.remove("opp-rush");
      }, 1000);
    },
    putFight(payload) {},
    quit(gameId) {
      this.$store.dispatch("quit", gameId);
    }
  },
  components: {
    Hero,
    Opponent
  }
};
</script>

<style scoped>
.game {
  background-color: #1a1a1d;
  height: 100vh;
  width: 100vw;
  position: fixed;
  color: #c3073f;
  text-shadow: 0 0 2px #4e4e50;
}
div button {
  position: absolute;
  right: 0vw;
  cursor: pointer;
}

.opponent-hand {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  max-height: 30vh;
  color: black;
}
.hidden {
  margin: 0 -3px;
  height: 30vh;
  width: 20vh;
  z-index: 1;
  cursor: pointer;
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
.opp-card {
  height: 27.5vh;
  width: 18vh;
  margin: 0 5px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(250, 154, 154);
  box-shadow: 0 2px 10px #6f2232;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
}
.opp-card:hover {
  position: relative;
  animation: grow 0.5s forwards, slideDown 0.5s forwards;
}
@keyframes grow {
  to {
    height: 50vh;
    width: 33vh;
  }
}
.opp-card img {
  height: 90%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}
.defense {
  position: absolute;
  left: 1.2rem;
  top: 1rem;
  z-index: 2;
  visibility: hidden;
}
.shield {
  position: absolute;
  left: 0rem;
  top: 1rem;
  color: gold;
  z-index: 1;
  visibility: hidden;
}
.attack {
  position: absolute;
  right: 3.5rem;
  top: 1rem;
  z-index: 2;
  visibility: hidden;
}
.swords {
  position: absolute;
  right: 0rem;
  top: 0.5rem;
  z-index: 1;
  visibility: hidden;
}
.health {
  position: absolute;
  bottom: -0.4rem;
  z-index: 2;
  color: white;
  visibility: hidden;
}
.heart {
  position: absolute;
  bottom: 0rem;
  z-index: 1;
  color: darkred;
  visibility: hidden;
}
.opp-card:hover .attack,
.opp-card:hover .defense,
.opp-card:hover .health,
.opp-card:hover .shield,
.opp-card:hover .swords,
.opp-card:hover .heart {
  animation: text-grow 0.5s forwards;
  visibility: visible;
}
.opponent h1 {
  position: absolute;
  text-align: center;
  width: 100vw;
  max-width: 99%;
  top: 26vh;
}
.opponent h2 {
  position: fixed;
  right: 2.5vw;
  top: 20vh;
}
.enemy-count {
  position: absolute;
  left: 3vw;
  color: #950740;
}
.fight {
  position: absolute;
  top: 43vh;
  width: 10vw;
  margin: 0 45vw;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
}
.fight img {
  height: 14vh;
  width: auto;
  box-shadow: 0 0 30px 10px #c3073f;
  padding: 6% 2% 0;
  border-radius: 50%;
}
.fight:hover img {
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
.hero-count {
  position: absolute;
  left: 3vw;
  bottom: 0vh;
  color: #950740;
}
.hero h1 {
  position: absolute;
  text-align: center;
  width: 100vw;
  max-width: 99%;
  bottom: 25vh;
}
.hero h2 {
  position: absolute;
  left: 2vw;
  top: 20vh;
}
.hero-hand {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  max-height: 30vh;
  position: absolute;
  bottom: 0vh;
  width: 100vw;
  max-width: 99%;
  z-index: 1;
  color: black;
}
.hero-card {
  height: 27.5vh;
  width: 18vh;
  margin: 0 5px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(180, 211, 170);
  box-shadow: 0 3px 10px #6f2232;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
}
.hero-card:hover {
  position: relative;
  animation: slideUp 0.5s forwards, grow 0.5s forwards;
}
@keyframes slideUp {
  from {
    bottom: 0vh;
  }
  to {
    bottom: 7vh;
  }
}
.hero-card img {
  height: 85%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}
.hero-card:hover .attack,
.hero-card:hover .defense,
.hero-card:hover .health,
.hero-card:hover .shield,
.hero-card:hover .swords,
.hero-card:hover .heart {
  animation: text-grow 0.5s forwards;
  visibility: visible;
}
@keyframes text-grow {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 5rem;
  }
}
.hero-rush {
  animation: hero-rush 1s ease-in;
}
@keyframes hero-rush {
  from {
    left: 1rem;
  }
  50% {
    left: 50vw;
  }
}
.opp-rush {
  animation: opp-rush 1s ease-in;
}
@keyframes opp-rush {
  from {
    right: 1rem;
  }
  50% {
    right: 50vw;
  }
}
</style>
