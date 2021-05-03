<template>
    <div id="app">
        <Header v-on:btnReturn = "scrollDown"/>
        <transition name = "fade" mode = "out-in">
			<router-view :key = "$route.path" v-on:btnReturn = "scrollDown"></router-view>
		</transition>
		<BackToTop v-if = "this.showBackToTop" />
		<Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import BackToTop from './components/BackToTop.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
	data() {
        return {
            showBackToTop: false
        }
    },
    components: {
		Header,
		BackToTop,
		Footer
    },
	methods: {
        backToTop: function() {
            if(window.scrollY > 0) {
                this.showBackToTop = true;
            } else {
                this.showBackToTop = false;
            }
        },
        scrollDown: function(id) {			
			this.$router.replace({name:'home'});
            if(id != '#id-home') {			
                setTimeout(function(){
                    let el = document.querySelector(id);
                    let coord = el.getBoundingClientRect();
                    coord = coord.top + window.scrollY;
                    document.querySelector('html').scroll({
                        top: coord,
                        left: 0,
                        behavior: 'smooth'		
                    });  
                }, 650);
            }	                            
		}
    },
    created: function(){
        window.scrollTo(0,0);
        window.addEventListener("scroll", this.backToTop);
    }
}
</script>

<style>
@import 'assets/css/style.css';

	#app {
		width: 100%;
		height: fit-content;
        background-image: url('./assets/images/white-pattern-bg.jpg');
        background-size: 100% 100%;
	}

    .fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.2s;
		transition-property: opacity;
		transition-timing-function: linear;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>
