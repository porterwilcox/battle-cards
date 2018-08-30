<template>
    <div class="hero" v-if="hero.id">
        <span class="defense">{{hero.defense}}</span>
        <i class="fas fa-shield-alt shield"></i>
        <span class="attack">{{hero.attack}}</span>
        <span class="health">{{hero.health}}</span>
        <span class="swords">&#9876;</span>
        <i class="fas fa-heart heart"></i>
        <img :src="hero.img" />
    </div>
</template>

<script>
export default {
    name: 'Hero',
    computed: {
        hero(){
            return this.$store.state.hero
        }
    }
}
</script>

<style scoped>
.hero {
  position: absolute;
  left: 1rem;
  top: 30vh;
}
.hero {
  height: 50vh;
  width: 33vh;
  border: 2px solid black;
  border-radius: 5%;
  background-color: rgb(250, 154, 154);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.623);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.hero-card img {
  height: 95%;
  width: 95%;
  bottom: 1%;
  position: absolute;
}
.defense {
  position: absolute;
  left: 3rem;
  top: 1rem;
  z-index: 2;
  font-size: 5rem;
}
.shield {
  position: absolute;
  left: 1.8rem;
  top: 1rem;
  color: gold;
  font-size: 5rem;
  z-index: 1;
}
.attack {
  position: absolute;
  right: 3.5rem;
  top: 1rem;
  z-index: 2;
  font-size: 5rem;
}
.swords {
  position: absolute;
  right: 0rem;
  top: 0.5rem;
  z-index: 1;
  font-size: 5rem;
}
.health {
  position: absolute;
  bottom: 1.5rem;
  z-index: 2;
  color: white;
  font-size: 4rem;
}
.heart {
  position: absolute;
  bottom: 0.8rem;
  z-index: 1;
  color: darkred;
  font-size: 6rem;
}
</style>