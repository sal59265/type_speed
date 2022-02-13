import VueRouter from 'vue-router';
import Home from './pages/Home';
import LeaderBoard from './pages/LeaderBoard';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/leaderboard', component: LeaderBoard, name: 'LeaderBoard' }
];

export default new VueRouter({ routes, mode: 'history' });
