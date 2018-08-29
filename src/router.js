import Vue from 'vue'
import Router from 'vue-router'
import BattleCards from './views/BattleCards.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'battleCards',
      component: BattleCards
    },
    {
      path: '/:gameId',
      name: 'game',
      component: Game
    }
  ]
})
