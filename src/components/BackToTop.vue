<template>
    <div class = "back-to-top">
       <i id = "arrow-up" class="fas fa-arrow-up" @click = "scrollTop"></i>        
    </div>  
</template>

<script>
export default {
    name: 'BackToTop',
    components: {
    
    },
    methods: {
        scrollTop: function() {
            document.querySelector('html').scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });       
        }
    }
}
</script>

<style>
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid var(--palleteWhite);
        cursor: pointer;
        color: var(--palleteWhite);
        transition: all 0.30s ease;
        text-align: center;
        background-color: var(--palleteGreen);
        box-shadow: 0px 0px 10px var(--palleteBlack);
        z-index: 100;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back-to-top::before {
        content: '';
        width: 100%;
        position: absolute;
        background-color: var(--palleteBlue);
        border-radius: 50px;
        height: 100%;
        top: 150%;
        left:0;
        transition: all 0.5s ease;
        z-index: 100;
    }

    .back-to-top:hover:before {
        top: 0%;
    }

    #arrow-up {
        position: absolute;
        color: var(--palleteWhite);
        font-size: 40px;
        line-height: 50px;
        z-index: 150;
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }
</style>
