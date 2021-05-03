<template>
    <div>
        <h2>Página não encontrada</h2>
    </div>
</template>

<script>
export default {
    name: 'NotFound',    
    methods: {  },
    data() {
        return { }
    },
}
</script>

<style scoped>
    div {
        width: 100%;
        height: calc(100vh - 263px);
        display: flex;
        justify-content: center;
        align-items: center;        
    }

    h2 {
        color: var(--palleteGreen);
        text-shadow: 2px 2px 0px var(--palleteBlack);
        font-size: 60px;
        position: relative;
        top: -35px;
    }
</style>
