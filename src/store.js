import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let gameApi = Axios.create({
  baseURL: `https://inspire-server.herokuapp.com/cards`,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aGame:{}
  },
  mutations: {
    setGame(state, game){
      state.aGame = game
    }
  },
  actions: {
    selectDeck({dispatch, commit}, deckNum){
      let gameObj
      switch(deckNum){
        case 1:
        gameObj = {"playerName": "robots", "set": 1}
        break
        case 2:
        gameObj = {"playerName": "spinner hat heads", "set": 2}
        break
        case 3:
        gameObj = {"playerName": "robot heads", "set": 3}
        break
        case 4:
        gameObj = {"playerName": "cat pack", "set": 4}
        break
      }
      gameApi.post('/', {"gameConfig": gameObj})
        .then(res => commit('setGame', res.data))
    }
  }
})
