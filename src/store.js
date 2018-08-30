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
    game: {},
    hero: {},
    opponent: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game
      router.push({ name: 'game', params: { gameId: game.id } })
      console.log(state.game)
    },
    setHero(state, card) {
      state.hero = card
    },
    setOpponent(state, card) {
      state.opponent = card
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
        .then(res => commit('setGame', res.data.data))
    },
    setHero({ dispatch, commit }, card) {
      commit('setHero', card)
    },
    setOpponent({ dispatch, commit }, card) {
      commit('setOpponent', card)
    },
    fight({ dispatch, commit }, payload) {
      gameApi.put(`/${payload.gameId}`, payload)
        .then(res => {
          gameApi.get(`/${payload.gameId}`)
            .then(res => commit('setGame', res.data.data))
        })
    },
    quit({ dispatch, commit }, gameId) {
      gameApi.delete(`/${gameId}`)
        .then(res => router.push({ name: 'battleCards' }))
        commit('setHero', {})
        commit('setOpponent', {})
    }
  }
})
