<template>
 <div class="opponent" v-if="opponent">
    <img 
    v-if="!opponent.visible"
    src="@/assets/monster-hunt-card-back.png"
    class="hidden"
    >
    <div class="opp-card"
    v-else-if="opponent.visible"
    ><img
    :src="opponent.img"
    ><span class="defense">{{opponent.defense}}</span>
    <i class="fas fa-shield-alt shield"></i>
    <span class="attack">{{opponent.attack}}</span>
    <span class="health">{{opponent.health}}</span>
    <span class="swords">&#9876;</span>
    <i class="fas fa-heart heart"></i>
    </div>
</div>
</template>

<script>
export default {
  name: "Opponent",
  computed: {
    opponent() {
        return this.$store.state.opponent;
    }
  }
};
</script>

<style scoped>
.opponent {
  position: absolute;
  right: 1rem;
  top: 30vh;
  color: black;
}
.hidden {
  height: 50vh;
  width: 33vh;
  z-index: 1;
}
.opp-card {
  height: 50vh;
  width: 33vh;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(250, 154, 154);
  box-shadow: 0 3px 10px #6f2232;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.opp-card img {
  height: 95%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}.defense {
  position: absolute;
  left: 1.2rem;
  top: .5rem;
  z-index: 2;
  font-size: 5rem;
}
.shield {
  position: absolute;
  left: 0rem;
  top: .5rem;
  color: gold;
  font-size: 5rem;
  z-index: 1;
}
.attack {
  position: absolute;
  right: 3.5rem;
  top: .5rem;
  z-index: 2;
  font-size: 5rem;
}
.swords {
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index: 1;
  font-size: 5rem;
}
.health {
  position: absolute;
  bottom: .3rem;
  z-index: 2;
  color: white;
  font-size: 3rem;
}
.heart {
  position: absolute;
  bottom: 0rem;
  z-index: 1;
  color: darkred;
  font-size: 4rem;
}
</style>