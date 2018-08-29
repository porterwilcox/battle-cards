<template>
 <div>
  <div class="title-bar">
    <h1>Battle</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Cards</h1>
  </div>
  <div class="card-set-selection">
    <h1>choose your deck</h1>
    <div class="sets">
      <div @click="selectDeck(1)" class="set1 set">
        <p>robots <br> with <br> necks!</p> 
      <img src="https://robohash.org/YOUR-TEXT.png?set=set1">
      </div>
      <div @click="selectDeck(2)" class="set2 set"> 
        <p>knuckle <br> heads</p>
      <img src="https://robohash.org/YOUR-TEXT.png?set=set2">
      </div>
      <div @click="selectDeck(3)" class="set3 set"> 
        <p>robots <br> without <br> necks!</p>
      <img src="https://robohash.org/YOUR-TEXT.png?set=set3">
      </div>
      <div @click="selectDeck(4)" class="set4 set">
        <p>cat <br> pack</p>
      <img src="https://robohash.org/YOUR-TEXT.png?set=set4">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DeckSelect",
  data() {
    return {};
  },
  methods: {
    selectDeck(deckNum) {
      this.$store.dispatch("selectDeck", deckNum);
    }
  }
};
</script>

<style scoped>
/* * {
  outline: 1px solid red
} */
.title-bar {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: flex-end;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 2rem;
  border: 5px solid darkred;
  border-top-right-radius: 15%;
  border-bottom-left-radius: 15%;
  box-shadow: -5px 5px 10px 3px darkred;
  height: fit-content;
}
.title-bar img {
  height: 20vh;
}
/* .title-bar h1 {
  border-bottom: 5px solid darkred;
  height: fit-content;
} */
.card-set-selection {
  position: relative;
  height: 70vh;
  text-align: center;
}
.sets {
  display: flex;
  flex-flow: wrap row;
}
.set {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  height: 45%;
  width: 50%;
}
.set2 {
  left: 50%;
}
.set3 {
  bottom: 0%;
}
.set4 {
  bottom: 0%;
  left: 50%;
}
.set:hover {
  z-index: 2;
}
.set:hover img {
  border: 2px solid green;
  background-color: rgba(0, 128, 0, 0.308);
  border-radius: 5%;
}
.card-set-selection p {
  font-size: 2rem;
  visibility: hidden;
}
.set:hover p {
  visibility: visible;
  margin-right: 2vw;
}
</style>
