import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
import Biomassa from './components/energia/Biomassa.vue';
import Eolica from './components/energia/Eolica.vue';
import Geotermica from './components/energia/Geotermica.vue';
import Hidrica from './components/energia/Hidrica.vue';
import Oceanica from './components/energia/Oceanica.vue';
import Solar from './components/energia/Solar.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{ path: '/', name: 'home', component:Home },
		{ path: '/biomassa', name: 'biomassa', component:Biomassa },
    { path: '/eolica', name: 'eolica', component:Eolica },
    { path: '/geotermica', name: 'geotermica', component:Geotermica },
    { path: '/hidrica', name: 'hidrica', component:Hidrica },
    { path: '/oceanica', name: 'oceanica', component:Oceanica },
    { path: '/solar', name: 'solar', component:Solar },    
		{ path: '*', name: 'notfound', component:NotFound }
	]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
