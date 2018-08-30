<template>
<div v-if="game.id">
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
    </div>
    <opponent />
    <button 
    @click='fight({
        "playerId": game.players[0].id,
        "opponentId": game.players[1].id,
        "playerCardId": hero.id,
        "opponentCardId": opponent.id,
        gameId: game.id,
      })' 
    v-if="hero.id && opponent.id"
    >Fight!</button>
    <hero />
    <div class="hero">
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
  data() {
    return {};
  },
  computed: {
    game() {
      return this.$store.state.game;
    },
    hero() {
      return this.$store.state.hero;
    },
    opponent() {
      return this.$store.state.opponent;
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
      this.$store.dispatch("fight", payload);
    },
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
  z-index: 1;
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
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.623);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
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
  left: 3rem;
  top: 1rem;
  z-index: 2;
  visibility: hidden;
}
.shield {
  position: absolute;
  left: 1.8rem;
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
  top: .5rem;
  z-index: 1;
  visibility: hidden;
}
.health {
  position: absolute;
  bottom: .7rem;
  z-index: 2;
  color: white;
  visibility: hidden;
}
.heart {
  position: absolute;
  bottom: 1rem;
  z-index: 1;
  color: darkred;
  visibility: hidden;
}
.opp-card:hover .attack, .opp-card:hover .defense, .opp-card:hover .health, .opp-card:hover .shield, .opp-card:hover .swords, .opp-card:hover .heart {
  animation: text-grow .5s forwards;
  visibility: visible;
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
  width: 100vw;
  max-width: 99.5%;
  z-index: 1;
}
.hero-card {
  height: 27.5vh;
  width: 18vh;
  margin: 0 5px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(180, 211, 170);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.623);
  display: flex;
  justify-content: center;
  position: relative;
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
  height:85%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}
.hero-card:hover .attack, .hero-card:hover .defense, .hero-card:hover .health, .hero-card:hover .shield, .hero-card:hover .swords, .hero-card:hover .heart {
  animation: text-grow .5s forwards;
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
</style>
