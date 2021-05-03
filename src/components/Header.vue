<template>
    <header> 
        <div class = "header-left">
            <h1>Green<span>World</span></h1>
            <img src = "../assets/images/planetlogo.svg"/>
        </div>

        <div class = "header-right">
            <nav>
                <ul class = "menu">
                    <li @click = "scrolling('#id-home')"><p>HOME</p></li>
                    <li @click = "scrolling('#id-sustentabilidade')"><p>SUSTENTABILIDADE</p></li>
                    <li>
                        <p @click = "scrolling('#id-energia')">ENERGIA <i class="fas fa-caret-down"></i></p>
                        <ul class = "sub-menu">                
                            <li @click = "openPage('biomassa')">Biomassa</li>
                            <li @click = "openPage('eolica')">Eólica</li>
                            <li @click = "openPage('geotermica')">Geotérmica</li>
                            <li @click = "openPage('hidrica')">Hídrica</li>
                            <li @click = "openPage('oceanica')">Oceânica</li>
                            <li @click = "openPage('solar')">Solar</li>                            
                        </ul>
                    </li>
                    <li @click = "scrolling('#id-contato')"><p>CONTATO</p></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    components: {
    
    },
    methods: {
        openPage: function(page) { 
            if(page != this.$route.name) {
                this.$router.replace({path:'/' + page});
            }
        },
        scrolling: function(id) {                                    
            if(this.$route.name == 'home') {  
                if(id != '#id-home') {                  
                    let el = document.querySelector(id);
                    let coord = el.getBoundingClientRect();
                    coord = coord.top + window.scrollY;
                    document.querySelector('html').scroll({
                        top: coord,
                        left: 0,
                        behavior: 'smooth'
                    });    
                }                    
            } else {
                this.$emit('btnReturn', id);
            }                       
                         
        }     
    }
}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-family: 'Bebas Neue';
        padding: 20px;
    }

    .header-left {
        display: flex;
        align-items: center;
    }

    .header-left img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    .header-left h1 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }

    .header-left span {
        color: var(--palleteBlue);
    }

    .header-right {
        position: relative;
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menu {
        display: flex;    
        position: relative;
        z-index: 200;
    }

    .menu > li {
        position: relative;
        width: fit-content;
        list-style-type: none;
        cursor: pointer;
        margin-left: 27px;
        text-align: center;
    }

    .menu > li > p {
        transition: all 0.5s ease;
        color: var(--palleteGreen);
        font-size: 25px;
        font-family:"Bebas Neue";
        text-shadow: 1px 1px 0px var(--palleteBlack);
    }

    .menu > li > p:hover {
        color: var(--palleteBlue);
    }

    .menu > li:hover > .sub-menu {
        height: 180px;             
    }

    .sub-menu {
        position: absolute;
        top: 100%;
        left: 0%;
        height: 0px;
        overflow: hidden;
        border-radius: 5px;
        list-style-type: none;
        background-color: var(--palleteGreen);
        padding: 0px 10px;        
        border-radius: 5px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .sub-menu li {
        color: var(--palleteWhite);
        transition: color 0.5s ease;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        font-size: 22px;
        text-align: left;
    }

    .sub-menu li:hover {
        color: var(--palleteBlue);
    }
</style>
