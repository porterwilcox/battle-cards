<template>
      <div class="hero" v-if="hero">
        <span class="defense opac">{{hero.defense}}</span>
        <i class="fas fa-shield-alt shield opac"></i>
        <span class="attack opac">{{hero.attack}}</span>
        <span class="health opac">{{hero.health}}</span>
        <span class="swords opac">&#9876;</span>
        <i class="fas fa-heart heart opac"></i>
        <img :src="hero.img" /> 
      </div>
</template>

<script>
export default {
  name: "Hero",
  computed: {
    hero() {
      return this.$store.state.hero;
    }
  }
};
</script>

<style scoped>
.hero {
  height: 50vh;
  width: 33vh;
  position: absolute;
  top: 30vh;
  left: 1rem;
  border: 2px solid black;
  border-radius: 5%;
  box-shadow: 0 3px 10px #6f2232;
  background-color: rgb(180, 211, 170);
  display: flex;
  color: black;
  justify-content: center;
}
.hero img {
  height: 95%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}
.defense {
  position: absolute;
  left: 1.2rem;
  top: 0.5rem;
  z-index: 2;
  font-size: 5rem;
}
.shield {
  position: absolute;
  left: 0rem;
  top: 0.5rem;
  color: gold;
  font-size: 5rem;
  z-index: 1;
}
.attack {
  position: absolute;
  right: 3.5rem;
  top: 0.5rem;
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
  bottom: 0.3rem;
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