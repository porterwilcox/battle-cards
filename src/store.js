import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

let gameApi = Axios.create({
  baseURL: `https://inspire-server.herokuapp.com/cards`,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game
      router.push({ name: 'game', params: { gameId: game.id } })
      console.log(state.game)
    }
  },
  actions: {
    selectDeck({ dispatch, commit }, deckNum) {
      let gameObj
      switch (deckNum) {
        case 1:
          gameObj = { "playerName": "robots", "set": 1 }
          break
        case 2:
          gameObj = { "playerName": "knuckle heads", "set": 2 }
          break
        case 3:
          gameObj = { "playerName": "robot heads", "set": 3 }
          break
        case 4:
          gameObj = { "playerName": "cat pack", "set": 4 }
          break
      }
      gameApi.post('/', { "gameConfig": gameObj })
        .then(res => commit('setGame', res.data))
    },
    getGame({ dispatch, commit }, gameId) {
      gameApi.get(`/${gameId}`)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.data)
    })
  }
}
})
