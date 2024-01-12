import { createRouter, createWebHistory } from 'vue-router';
import Start from '../views/Start.vue';
import showPerson from '../components/showPerson.vue';
import game from '../ternaryPage/game.vue'
import cosPhos from '../ternaryPage/cosPhos.vue'
import animation from '../ternaryPage/animation.vue'
import codeProj from '../ternaryPage/codeProj.vue'
import notes from '../ternaryPage/notes.vue'
import music from '../components/music.vue'

const routes = [
  { path: '/', component: Start },
  { path: '/showPerson', component: showPerson },
  { path: '/game', component: game },
  { path: '/cosPhos', component: cosPhos },
  { path: '/animation', component: animation },
  { path: '/codeProj', component: codeProj },
  { path: '/notes', component: notes },
  { path: '/music', component: music },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
