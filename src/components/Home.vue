<template>
    <div class = "container">
        <About />
        <Sustentabilidade />
        <Energia />
        <Contato />
    </div>    
</template>

<script>
import About from './About.vue';
import Sustentabilidade from './Sustentabilidade.vue';
import Energia from './Energia.vue';
import Contato from './Contato.vue';

export default {
    name: 'Home',
    components: {
        About,
        Sustentabilidade,
        Energia,
        Contato
    },
    created: function() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
    }
</style>
